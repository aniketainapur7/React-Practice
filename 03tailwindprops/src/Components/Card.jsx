import { useState } from 'react'
function Card(props) {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold text-blue-600 bg-green-400 rounded xl p-4">Hello, Tailwind!</h1>
      <div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <img class="size-12 shrink-0" src="/img/logo.svg" alt="ChitChat Logo" />
        <div>
          <div class="text-xl font-medium text-black dark:text-white">{props.name}</div>
          <p class="text-gray-500 dark:text-gray-400">You have a new message!</p>
        </div>
      </div>
    </>
  )
}

export default Card