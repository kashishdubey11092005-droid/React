export function sum() {
  return 10 + 10
}

export default function Fruit() {
  return (
    <div>
      <h1>First Component {sum()}</h1>
      <h1>Apple</h1>
    </div>
  )
}
