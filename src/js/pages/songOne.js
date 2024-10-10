export default function songOne(ctx){
  return `<div class="congOne-page">
    <h1>Пісня</h1>
    <p>Пісня з id: ${ctx.params.id}</p>
    <a href="/songs" data-route>← До списку пісень</a>
</div>`}