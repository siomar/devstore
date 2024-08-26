import { Children } from 'react'

type Props<T> = {
  of: Array<T>
  render: (item: T, index: number) => React.ReactNode
}

export default function Each<T>({ of, render }: Props<T>) {
  return Children.toArray(of.map((item, index) => render(item, index)))
}
