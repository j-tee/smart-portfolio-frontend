export interface FormatFileSizeDisplay {
  (value: number): string
}

export const formatFileSizeDisplay: FormatFileSizeDisplay = value => {
  if (value < 1024) {
    return `${value} KB`
  }
  return `${parseFloat((value / 1024).toFixed(1))} MB`
}
