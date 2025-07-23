export default function decorate(block) {
  const content = block.querySelector(':scope > div:last-of-type');
  
  const input = document.createElement('input');
  input.id = 'search';
  input.type = 'search';
  input.placeholder = 'Search';
  content.append(input);
}