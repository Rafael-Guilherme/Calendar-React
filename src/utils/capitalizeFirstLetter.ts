export default function capitalizeFirstLetter(str: string) {
    return str.replace(/^\w/, (firstLetter) => firstLetter.toUpperCase());
  }
  