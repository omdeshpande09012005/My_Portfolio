/**
 * Callout Component
 * Highlighted callout/alert boxes for MDX (info, warning, success, error)
 */

import { AlertCircle, AlertTriangle, CheckCircle, Info } from 'lucide-react';

const calloutConfig = {
  info: {
    bgColor: 'bg-blue-50 dark:bg-blue-950',
    borderColor: 'border-blue-200 dark:border-blue-800',
    textColor: 'text-blue-900 dark:text-blue-100',
    iconColor: 'text-blue-500',
    Icon: Info,
    label: 'Info',
  },
  warning: {
    bgColor: 'bg-yellow-50 dark:bg-yellow-950',
    borderColor: 'border-yellow-200 dark:border-yellow-800',
    textColor: 'text-yellow-900 dark:text-yellow-100',
    iconColor: 'text-yellow-500',
    Icon: AlertTriangle,
    label: 'Warning',
  },
  success: {
    bgColor: 'bg-green-50 dark:bg-green-950',
    borderColor: 'border-green-200 dark:border-green-800',
    textColor: 'text-green-900 dark:text-green-100',
    iconColor: 'text-green-500',
    Icon: CheckCircle,
    label: 'Success',
  },
  error: {
    bgColor: 'bg-red-50 dark:bg-red-950',
    borderColor: 'border-red-200 dark:border-red-800',
    textColor: 'text-red-900 dark:text-red-100',
    iconColor: 'text-red-500',
    Icon: AlertCircle,
    label: 'Error',
  },
};

export const Callout = ({ type = 'info', title, children }) => {
  const config = calloutConfig[type] || calloutConfig.info;
  const { bgColor, borderColor, textColor, iconColor, Icon, label } = config;

  return (
    <div
      className={`my-6 border-l-4 rounded-r-lg p-4 ${bgColor} ${borderColor} ${textColor}`}
      role="alert"
    >
      <div className="flex gap-3">
        <Icon className={`${iconColor} flex-shrink-0 mt-0.5`} size={20} />
        <div className="flex-1">
          {title && (
            <h4 className="font-semibold mb-2">
              {title || label}
            </h4>
          )}
          <div className="text-sm leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Callout;
