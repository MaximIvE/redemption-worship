export default function songOne(ctx) {
  return `<div class="congOne-page">
    <h2>Пісня</h2>
    <p>Пісня з id: ${ctx.params.id}</p>
    <a href="/songs" data-route>← До списку пісень</a>
</div>`}