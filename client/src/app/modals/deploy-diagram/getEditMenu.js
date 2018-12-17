import Selection from '../../util/selection';

export default function getEditMenu() {
  const selection = new Selection(window);
  const currentSelection = selection.getSelection();

  return [
    {
      role: 'copy',
      enabled: Boolean(currentSelection)
    },
    {
      role: 'cut',
      enabled: Boolean(currentSelection)
    },
    {
      role: 'paste'
    },
    {
      role: 'selectAll'
    }
  ];
}
