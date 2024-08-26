'use client'

import { Skeleton } from '@/components/skeleton'
import Each from '@/helpers/each'
import { useSearchParams } from 'next/navigation'

export default function Loading() {
  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">{query}</span>
      </p>
      <div className="grid grid-cols-3 gap-6">
        <Each
          of={[1, 2, 3, 4, 5, 6]}
          render={() => <Skeleton className="h-[450px]" />}
        />
      </div>
    </div>
  )
}
