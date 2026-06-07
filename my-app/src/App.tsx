import { useState } from 'react'

export default function App() {
	const [count, setCount] = useState(0)

	return (
		<div style={{ padding: 24 }}>
			<h1>Vite + React</h1>
			<p>
				This app was restored. Edit <code>src/App.tsx</code> and save to hot-reload.
			</p>
			<div style={{ marginTop: 16 }}>
				<button className="counter" onClick={() => setCount((c) => c + 1)}>
					count is {count}
				</button>
			</div>
		</div>
	)
}

