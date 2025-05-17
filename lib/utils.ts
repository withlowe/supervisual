import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string, format?: string) {
  if (format === "MMM D, YYYY") {
    return new Date(date)
      .toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
      .toUpperCase()
  }

  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount)
}
