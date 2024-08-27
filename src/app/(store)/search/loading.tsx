'use client'

import { Skeleton } from '@/components/skeleton'
import Each from '@/helpers/each'
import { Suspense } from 'react'
import CurrentSearch from './current-search'

export default function Loading() {
  return (
    <div className="flex flex-col gap-4">
      <Suspense fallback={null}>
        <CurrentSearch />
      </Suspense>
      <div className="grid grid-cols-3 gap-6">
        <Each
          of={[1, 2, 3, 4, 5, 6]}
          render={() => <Skeleton className="h-[450px]" />}
        />
      </div>
    </div>
  )
}
