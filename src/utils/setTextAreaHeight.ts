export default function setHeight(element: any, defaultHeight: string) {
  if (element) {
    const target = element.target ? element.target : element;
    target.style.height = defaultHeight;
    target.style.height = `${target.scrollHeight}px`;
  }
}
