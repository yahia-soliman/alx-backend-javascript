export default function guardrail(mathFunction) {
  const queue = [];
  queue.push(mathFunction(), 'Guardrail was processed');
  return queue;
}
