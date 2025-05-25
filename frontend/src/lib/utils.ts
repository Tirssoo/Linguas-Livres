import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatFileSize(size: number, decimals = 0) {
	if (size < 1024) return `${size} B`;
	if (size < 1024 * 1024) return `${(size / 1024).toFixed(decimals)} KB`;
	if (size < 1024 * 1024 * 1024)
		return `${(size / 1024 / 1024).toFixed(decimals)} MB`;
	return `${(size / 1024 / 1024 / 1024).toFixed(decimals)} GB`;
}