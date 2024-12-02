import React from "react";
import { classNames } from "./Utils";
import {
  DocumentTextIcon,
  MinusCircleIcon,
  PlusCircleIcon,
  PrinterIcon,
  ReceiptTaxIcon,
} from "@heroicons/react/outline";

// import TotalProduct from '../../public/images/dashboard/card_img/sale_icon.png'

export function SortIcon({ className }) {
  return (
    <svg
      className={className}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 320 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"></path>
    </svg>
  );
}

export function SortUpIcon({ className }) {
  return (
    <svg
      className={className}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 320 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"></path>
    </svg>
  );
}

export function SortDownIcon({ className }) {
  return (
    <svg
      className={className}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 320 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"></path>
    </svg>
  );
}

export function RTaxIcon({ className }) {
  return (
    <ReceiptTaxIcon
      className={classNames("h-5 w-5 text-gray-500", className)}
      aria-hidden="true"
    />
  );
}

export function RTPlusCircleIcon({ className }) {
  return (
    <PlusCircleIcon
      className={classNames("h-5 w-5 text-gray-500", className)}
      aria-hidden="true"
    />
  );
}

export function RTPrinterIcon({ className }) {
  return (
    <PrinterIcon
      className={classNames("h-5 w-5 text-gray-500", className)}
      aria-hidden="true"
    />
  );
}

export function RTDocumentTextIcon({ className }) {
  return (
    <DocumentTextIcon
      className={classNames("h-5 w-5 text-gray-500", className)}
      aria-hidden="true"
    />
  );
}

export function RTMinusCircleIcon({ className }) {
  return (
    <MinusCircleIcon
      className={classNames("h- w-3 text-blue-500", className)}
      aria-hidden="true"
    />
  );
}

export function EditIcon({}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-blue-600"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
      <path
        fillRule="evenodd"
        d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export function MenuIcon({}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7 text-blue-600 mt-5 ml-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}

export function CalculateIcon({}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7 ml-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
      />
    </svg>
  );
}

export function ArrowExpand({}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7 ml-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
      />
    </svg>
  );
}

export function ExclamationCircleIcon({}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7 ml-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

export function NotificationIcon({}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7 ml-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
      />
    </svg>
  );
}

export function UserIcon({}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7 ml-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  );
}

export function LanguageIcon({}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7 ml-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
      />
    </svg>
  );
}

export function TranslateIcon({}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7 ml-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
      />
    </svg>
  );
}
export function PrintIcon({}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7 ml-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
      />
    </svg>
  );
}

export function SearchIcon({}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7 ml-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
}

export function CardIcon({}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7 left-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
      />
    </svg>
  );
}

export function CashIcon({}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  );
}

export function ChequeIcon({}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
      />
    </svg>
  );
}

export function PointIcon({}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      />
    </svg>
  );
}

export function GiftCard({}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
      />
    </svg>
  );
}

export function CancelIcon({}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

export function TransactionIcon({}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

// Website Homepage Icons

export function RTCompanyLogo({}) {
  return (
    <svg
      width="103"
      height="62"
      viewBox="0 0 103 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.06533 55.5L3.90933 51.692H2.98533V55.5H1.02533V45.728H4.69333C5.44933 45.728 6.09333 45.8633 6.62533 46.134C7.15733 46.3953 7.55399 46.7547 7.81533 47.212C8.08599 47.66 8.22133 48.164 8.22133 48.724C8.22133 49.368 8.03466 49.9513 7.66133 50.474C7.28799 50.9873 6.73266 51.342 5.99533 51.538L8.33333 55.5H6.06533ZM2.98533 50.222H4.62333C5.15533 50.222 5.55199 50.096 5.81333 49.844C6.07466 49.5827 6.20533 49.2233 6.20533 48.766C6.20533 48.318 6.07466 47.9727 5.81333 47.73C5.55199 47.478 5.15533 47.352 4.62333 47.352H2.98533V50.222ZM17.2041 51.454C17.2041 51.734 17.1854 51.986 17.1481 52.21H11.4781C11.5247 52.77 11.7207 53.2087 12.0661 53.526C12.4114 53.8433 12.8361 54.002 13.3401 54.002C14.0681 54.002 14.5861 53.6893 14.8941 53.064H17.0081C16.7841 53.8107 16.3547 54.4267 15.7201 54.912C15.0854 55.388 14.3061 55.626 13.3821 55.626C12.6354 55.626 11.9634 55.4627 11.3661 55.136C10.7781 54.8 10.3161 54.3287 9.98008 53.722C9.65341 53.1153 9.49008 52.4153 9.49008 51.622C9.49008 50.8193 9.65341 50.1147 9.98008 49.508C10.3067 48.9013 10.7641 48.4347 11.3521 48.108C11.9401 47.7813 12.6167 47.618 13.3821 47.618C14.1194 47.618 14.7774 47.7767 15.3561 48.094C15.9441 48.4113 16.3967 48.864 16.7141 49.452C17.0407 50.0307 17.2041 50.698 17.2041 51.454ZM15.1741 50.894C15.1647 50.39 14.9827 49.9887 14.6281 49.69C14.2734 49.382 13.8394 49.228 13.3261 49.228C12.8407 49.228 12.4301 49.3773 12.0941 49.676C11.7674 49.9653 11.5667 50.3713 11.4921 50.894H15.1741ZM22.1907 49.354H20.8327V55.5H18.8447V49.354H17.9627V47.744H18.8447V47.352C18.8447 46.4 19.1154 45.7 19.6567 45.252C20.198 44.804 21.0147 44.594 22.1067 44.622V46.274C21.6307 46.2647 21.2994 46.344 21.1127 46.512C20.926 46.68 20.8327 46.9833 20.8327 47.422V47.744H22.1907V49.354ZM26.9049 55.626C26.1582 55.626 25.4862 55.4627 24.8889 55.136C24.2915 54.8 23.8202 54.3287 23.4749 53.722C23.1389 53.1153 22.9709 52.4153 22.9709 51.622C22.9709 50.8287 23.1435 50.1287 23.4889 49.522C23.8435 48.9153 24.3242 48.4487 24.9309 48.122C25.5375 47.786 26.2142 47.618 26.9609 47.618C27.7075 47.618 28.3842 47.786 28.9909 48.122C29.5975 48.4487 30.0735 48.9153 30.4189 49.522C30.7735 50.1287 30.9509 50.8287 30.9509 51.622C30.9509 52.4153 30.7689 53.1153 30.4049 53.722C30.0502 54.3287 29.5649 54.8 28.9489 55.136C28.3422 55.4627 27.6609 55.626 26.9049 55.626ZM26.9049 53.918C27.2595 53.918 27.5909 53.834 27.8989 53.666C28.2162 53.4887 28.4682 53.2273 28.6549 52.882C28.8415 52.5367 28.9349 52.1167 28.9349 51.622C28.9349 50.8847 28.7389 50.32 28.3469 49.928C27.9642 49.5267 27.4929 49.326 26.9329 49.326C26.3729 49.326 25.9015 49.5267 25.5189 49.928C25.1455 50.32 24.9589 50.8847 24.9589 51.622C24.9589 52.3593 25.1409 52.9287 25.5049 53.33C25.8782 53.722 26.3449 53.918 26.9049 53.918ZM34.3486 48.948C34.6006 48.5373 34.9273 48.2153 35.3286 47.982C35.7393 47.7487 36.2059 47.632 36.7286 47.632V49.69H36.2106C35.5946 49.69 35.1279 49.8347 34.8106 50.124C34.5026 50.4133 34.3486 50.9173 34.3486 51.636V55.5H32.3886V47.744H34.3486V48.948ZM47.6808 47.632C48.6328 47.632 49.3981 47.926 49.9768 48.514C50.5648 49.0927 50.8588 49.9047 50.8588 50.95V55.5H48.8988V51.216C48.8988 50.6093 48.7448 50.1473 48.4368 49.83C48.1288 49.5033 47.7088 49.34 47.1768 49.34C46.6448 49.34 46.2201 49.5033 45.9028 49.83C45.5948 50.1473 45.4408 50.6093 45.4408 51.216V55.5H43.4808V51.216C43.4808 50.6093 43.3268 50.1473 43.0188 49.83C42.7108 49.5033 42.2908 49.34 41.7588 49.34C41.2174 49.34 40.7881 49.5033 40.4708 49.83C40.1628 50.1473 40.0088 50.6093 40.0088 51.216V55.5H38.0488V47.744H40.0088V48.682C40.2608 48.3553 40.5828 48.0987 40.9748 47.912C41.3761 47.7253 41.8148 47.632 42.2908 47.632C42.8974 47.632 43.4388 47.7627 43.9148 48.024C44.3908 48.276 44.7594 48.64 45.0208 49.116C45.2728 48.668 45.6368 48.3087 46.1128 48.038C46.5981 47.7673 47.1208 47.632 47.6808 47.632ZM59.9287 51.454C59.9287 51.734 59.91 51.986 59.8727 52.21H54.2027C54.2494 52.77 54.4454 53.2087 54.7907 53.526C55.136 53.8433 55.5607 54.002 56.0647 54.002C56.7927 54.002 57.3107 53.6893 57.6187 53.064H59.7327C59.5087 53.8107 59.0794 54.4267 58.4447 54.912C57.81 55.388 57.0307 55.626 56.1067 55.626C55.36 55.626 54.688 55.4627 54.0907 55.136C53.5027 54.8 53.0407 54.3287 52.7047 53.722C52.378 53.1153 52.2147 52.4153 52.2147 51.622C52.2147 50.8193 52.378 50.1147 52.7047 49.508C53.0314 48.9013 53.4887 48.4347 54.0767 48.108C54.6647 47.7813 55.3414 47.618 56.1067 47.618C56.844 47.618 57.502 47.7767 58.0807 48.094C58.6687 48.4113 59.1214 48.864 59.4387 49.452C59.7654 50.0307 59.9287 50.698 59.9287 51.454ZM57.8987 50.894C57.8894 50.39 57.7074 49.9887 57.3527 49.69C56.998 49.382 56.564 49.228 56.0507 49.228C55.5654 49.228 55.1547 49.3773 54.8187 49.676C54.492 49.9653 54.2914 50.3713 54.2167 50.894H57.8987ZM60.8553 51.594C60.8553 50.81 61.0093 50.1147 61.3173 49.508C61.6346 48.9013 62.064 48.4347 62.6053 48.108C63.1466 47.7813 63.7486 47.618 64.4113 47.618C64.9153 47.618 65.396 47.73 65.8533 47.954C66.3106 48.1687 66.6746 48.458 66.9453 48.822V45.14H68.9333V55.5H66.9453V54.352C66.7026 54.7347 66.362 55.0427 65.9233 55.276C65.4846 55.5093 64.976 55.626 64.3973 55.626C63.744 55.626 63.1466 55.458 62.6053 55.122C62.064 54.786 61.6346 54.3147 61.3173 53.708C61.0093 53.092 60.8553 52.3873 60.8553 51.594ZM66.9593 51.622C66.9593 51.146 66.866 50.74 66.6793 50.404C66.4926 50.0587 66.2406 49.7973 65.9233 49.62C65.606 49.4333 65.2653 49.34 64.9013 49.34C64.5373 49.34 64.2013 49.4287 63.8933 49.606C63.5853 49.7833 63.3333 50.0447 63.1373 50.39C62.9506 50.726 62.8573 51.1273 62.8573 51.594C62.8573 52.0607 62.9506 52.4713 63.1373 52.826C63.3333 53.1713 63.5853 53.4373 63.8933 53.624C64.2106 53.8107 64.5466 53.904 64.9013 53.904C65.2653 53.904 65.606 53.8153 65.9233 53.638C66.2406 53.4513 66.4926 53.19 66.6793 52.854C66.866 52.5087 66.9593 52.098 66.9593 51.622ZM81.3095 48.752C81.3095 49.2747 81.1835 49.7647 80.9315 50.222C80.6889 50.6793 80.3015 51.048 79.7695 51.328C79.2469 51.608 78.5842 51.748 77.7815 51.748H76.1435V55.5H74.1835V45.728H77.7815C78.5375 45.728 79.1815 45.8587 79.7135 46.12C80.2455 46.3813 80.6422 46.7407 80.9035 47.198C81.1742 47.6553 81.3095 48.1733 81.3095 48.752ZM77.6975 50.166C78.2389 50.166 78.6402 50.0447 78.9015 49.802C79.1629 49.55 79.2935 49.2 79.2935 48.752C79.2935 47.8 78.7615 47.324 77.6975 47.324H76.1435V50.166H77.6975ZM87.2371 55.598C86.3224 55.598 85.4824 55.3833 84.7171 54.954C83.9518 54.5247 83.3451 53.932 82.8971 53.176C82.4491 52.4107 82.2251 51.5473 82.2251 50.586C82.2251 49.634 82.4491 48.78 82.8971 48.024C83.3451 47.2587 83.9518 46.6613 84.7171 46.232C85.4824 45.8027 86.3224 45.588 87.2371 45.588C88.1611 45.588 89.0011 45.8027 89.7571 46.232C90.5224 46.6613 91.1244 47.2587 91.5631 48.024C92.0111 48.78 92.2351 49.634 92.2351 50.586C92.2351 51.5473 92.0111 52.4107 91.5631 53.176C91.1244 53.932 90.5224 54.5247 89.7571 54.954C88.9918 55.3833 88.1518 55.598 87.2371 55.598ZM87.2371 53.848C87.8251 53.848 88.3431 53.7173 88.7911 53.456C89.2391 53.1853 89.5891 52.8027 89.8411 52.308C90.0931 51.8133 90.2191 51.2393 90.2191 50.586C90.2191 49.9327 90.0931 49.3633 89.8411 48.878C89.5891 48.3833 89.2391 48.0053 88.7911 47.744C88.3431 47.4827 87.8251 47.352 87.2371 47.352C86.6491 47.352 86.1264 47.4827 85.6691 47.744C85.2211 48.0053 84.8711 48.3833 84.6191 48.878C84.3671 49.3633 84.2411 49.9327 84.2411 50.586C84.2411 51.2393 84.3671 51.8133 84.6191 52.308C84.8711 52.8027 85.2211 53.1853 85.6691 53.456C86.1264 53.7173 86.6491 53.848 87.2371 53.848ZM97.0673 55.598C96.386 55.598 95.77 55.4813 95.2193 55.248C94.678 55.0147 94.2486 54.6787 93.9313 54.24C93.614 53.8013 93.4506 53.2833 93.4413 52.686H95.5413C95.5693 53.0873 95.7093 53.4047 95.9613 53.638C96.2226 53.8713 96.5773 53.988 97.0253 53.988C97.4826 53.988 97.842 53.8807 98.1033 53.666C98.3646 53.442 98.4953 53.1527 98.4953 52.798C98.4953 52.5087 98.4066 52.2707 98.2293 52.084C98.052 51.8973 97.828 51.7527 97.5573 51.65C97.296 51.538 96.932 51.4167 96.4653 51.286C95.8306 51.0993 95.3126 50.9173 94.9113 50.74C94.5193 50.5533 94.1786 50.278 93.8893 49.914C93.6093 49.5407 93.4693 49.046 93.4693 48.43C93.4693 47.8513 93.614 47.3473 93.9033 46.918C94.1926 46.4887 94.5986 46.162 95.1213 45.938C95.644 45.7047 96.2413 45.588 96.9133 45.588C97.9213 45.588 98.738 45.8353 99.3633 46.33C99.998 46.8153 100.348 47.4967 100.413 48.374H98.2573C98.2386 48.038 98.094 47.7627 97.8233 47.548C97.562 47.324 97.212 47.212 96.7733 47.212C96.3906 47.212 96.0826 47.31 95.8493 47.506C95.6253 47.702 95.5133 47.9867 95.5133 48.36C95.5133 48.6213 95.5973 48.8407 95.7653 49.018C95.9426 49.186 96.1573 49.326 96.4093 49.438C96.6706 49.5407 97.0346 49.662 97.5013 49.802C98.136 49.9887 98.654 50.1753 99.0553 50.362C99.4566 50.5487 99.802 50.8287 100.091 51.202C100.381 51.5753 100.525 52.0653 100.525 52.672C100.525 53.1947 100.39 53.68 100.119 54.128C99.8486 54.576 99.452 54.9353 98.9293 55.206C98.4066 55.4673 97.786 55.598 97.0673 55.598Z"
        fill="#000F1A"
      />
      <path
        d="M63.8093 10L51.0593 2.5L38.3093 10V25L51.0593 32.5L63.8093 25V10Z"
        stroke="#000F1A"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M51.0593 15.9999V21.9999"
        stroke="#000F1A"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M57.0593 13V22"
        stroke="#000F1A"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45.0596 19.0001V22.0001"
        stroke="#000F1A"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function RTVectorLogo({ className = "", fill = "#767676" }) {
  return (
    <svg
      width="57"
      height="50"
      viewBox="0 0 57 50"
      fill={fill}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M56.7223 15.1455L56.7054 15.0143C56.6745 14.8501 56.6189 14.6916 56.5405 14.5442L48.3119 1.2987C48.3119 1.2987 47.2625 0 47.0132 0H11.9483L1.4028 14.0948L1.27813 14.2247L1.26125 14.2857C1.17216 14.4288 1.099 14.5812 1.04306 14.7403L1.00021 14.8662C0.878702 15.2694 0.884598 15.7003 1.01709 16.1L1.06644 16.2416C1.13267 16.4091 1.21449 16.5623 1.3106 16.6987L26.8054 48.9935L26.8573 49.0675C26.9885 49.2364 27.1483 49.3857 27.3431 49.5221L27.4911 49.6143C27.6366 49.7052 27.7885 49.7779 28.0093 49.8584L28.1535 49.9065C28.4028 49.9701 28.6197 50 28.8314 50C29.0457 50 29.2547 49.9714 29.5366 49.8987L29.7093 49.8377C29.8781 49.7779 30.0301 49.7039 30.2132 49.5909L30.3275 49.5195C30.5236 49.3805 30.6807 49.2299 30.7677 49.1117L56.295 16.7831C56.5208 16.482 56.668 16.1294 56.7236 15.7571L56.7431 15.5896L56.7535 15.4571L56.7223 15.1455ZM43.034 14.2857L46.6677 7.71039L50.2989 14.2857H43.034ZM40.8548 18.1818H49.4755L35.1067 36.3831L40.8548 18.1818ZM38.7223 12.3143L33.4742 5.19481H42.6561L38.7223 12.3143ZM21.9119 18.1818H35.7547L28.8314 40.1L21.9119 18.1818ZM23.2846 14.2857L28.8314 6.75844L34.3781 14.2857H23.2846ZM19.3781 11.7247L16.9729 5.19481H24.1898L19.3781 11.7247ZM22.5586 36.3844L8.18852 18.1818H16.8106L22.5586 36.3844ZM12.8119 7.75584L15.2184 14.2857H8.00021L12.8119 7.75584Z"
        className={className}
      />
    </svg>
  );
}

export function ArrowLeftIcon({}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3"
      />
    </svg>
  );
}

export function DeleteIcon({}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      />
    </svg>
  );
}

 const noSymbolIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="red"
    className="w-6 h-6 m-auto"

  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
    />
  </svg>
);
export {
  noSymbolIcon,
}
