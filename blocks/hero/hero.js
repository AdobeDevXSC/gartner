export default function decorate(block) {
  const content = block.querySelector(':scope > div:last-of-type');
  const link = block.querySelector('a');

  const href = link?.href;
  if (!href) return; // Exit early if no link found

  link.remove();

  const input = document.createElement('input');
  input.id = 'search';
  input.type = 'search';
  input.placeholder = 'Search';

  // Add keydown handler to detect Enter key
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      window.location.href = href;
    }
  });

  content.append(input);
}
