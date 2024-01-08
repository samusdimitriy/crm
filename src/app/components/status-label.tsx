import React from 'react';
import clsx from 'clsx';

export enum Status {
  Active = 'Active',
  NotActive = 'NotActive',
  Pending = 'Pending',
  Suspended = 'Suspended',
}

export interface StatusLabelProps {
  children: React.ReactNode;
  status: Status;
  disabled?: boolean;
}

export default function StatusLabel({
  children,
  status,
  disabled,
}: StatusLabelProps) {
  console.log(process.env.SECRET_KEY);
  return (
    <div
      className={clsx(
        'inline-flex items-center py-1 px-3.5 rounded-3xl text-sm font-medium',
        status === Status.Active && 'bg-green-100 text-green-700',
        status === Status.NotActive && 'bg-red-100 text-green-700',
        status === Status.Pending && 'bg-orange-100 text-green-700',
        status === Status.Suspended && 'bg-blue-100 text-green-700',
        {
          ['opacity-75 cursor-not-allowed']: disabled,
        },
      )}
    >
      <div className="w-1 h-1 mr-2 rounded-full bg-current"></div>
      {children}
    </div>
  );
}
