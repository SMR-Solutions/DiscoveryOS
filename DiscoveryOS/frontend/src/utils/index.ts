/**
 * Utility functions
 * Add helper functions and utilities here
 */

export const cn = (...classes: (string | undefined)[]) => {
  return classes.filter(Boolean).join(' ')
}
