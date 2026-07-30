import React, { createContext, useContext, useState } from "react";

export interface Attendance {
  employeeId: string;
  date: string;
  status: "Present" | "Absent";
}

interface AttendanceContextType {
  attendance: Attendance[];

  markAttendance: (
    employeeId: string,
    date: string,
    status: "Present" | "Absent",
  ) => void;

  getAttendanceByDate: (date: string) => Attendance[];
}

const AttendanceContext = createContext<AttendanceContextType | undefined>(
  undefined,
);

export function AttendanceProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [attendance, setAttendance] = useState<Attendance[]>([]);

  const markAttendance = (
    employeeId: string,
    date: string,
    status: "Present" | "Absent",
  ) => {
    setAttendance((previous) => {
      const alreadyExists = previous.find(
        (item) => item.employeeId === employeeId && item.date === date,
      );

      if (alreadyExists) {
        return previous.map((item) =>
          item.employeeId === employeeId && item.date === date
            ? {
                ...item,
                status,
              }
            : item,
        );
      }

      return [
        ...previous,
        {
          employeeId,
          date,
          status,
        },
      ];
    });
  };

  const getAttendanceByDate = (date: string) => {
    return attendance.filter((item) => item.date === date);
  };

  return (
    <AttendanceContext.Provider
      value={{
        attendance,
        markAttendance,
        getAttendanceByDate,
      }}
    >
      {children}
    </AttendanceContext.Provider>
  );
}

export function useAttendance() {
  const context = useContext(AttendanceContext);

  if (!context) {
    throw new Error("useAttendance must be used inside AttendanceProvider");
  }

  return context;
}
