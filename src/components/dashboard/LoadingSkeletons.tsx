const SkeletonCard = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">{children}</div>
);

const SkeletonBar = ({ width }: { width: string }) => (
  <div className={`h-4 bg-gray-200 rounded animate-pulse ${width}`}></div>
);

export const StatsGridSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {[...Array(4)].map((_, i) => (
      <SkeletonCard key={i}>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <SkeletonBar width="w-24" />
            <div className="h-8 bg-gray-200 rounded animate-pulse mb-2 mt-2 w-20"></div>
            <SkeletonBar width="w-32" />
          </div>
          <div className="ml-4 p-3 bg-gray-100 rounded-lg animate-pulse">
            <div className="w-6 h-6 bg-gray-200 rounded"></div>
          </div>
        </div>
      </SkeletonCard>
    ))}
  </div>
);

export const ChartSkeleton = () => (
  <SkeletonCard>
    <div className="flex items-center justify-between mb-6">
      <SkeletonBar width="w-40" />
      <SkeletonBar width="w-20" />
    </div>
    
    <div className="space-y-4">
      {[...Array(7)].map((_, i) => (
        <div key={i} className="flex items-center space-x-4">
          <SkeletonBar width="w-12" />
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <SkeletonBar width="w-16" />
              <div className="h-3 bg-gray-200 rounded animate-pulse w-12"></div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  </SkeletonCard>
);

export const ProductsSkeleton = () => (
  <SkeletonCard>
    <div className="flex items-center justify-between mb-6">
      <SkeletonBar width="w-48" />
      <SkeletonBar width="w-16" />
    </div>
    
    <div className="space-y-4">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex items-center space-x-4 p-3">
          <div className="w-12 h-12 bg-gray-200 rounded-lg animate-pulse"></div>
          <div className="flex-1">
            <SkeletonBar width="w-32" />
            <div className="h-3 bg-gray-200 rounded animate-pulse mt-2 w-24"></div>
          </div>
          <div className="text-right">
            <SkeletonBar width="w-16" />
            <div className="h-3 bg-gray-200 rounded animate-pulse mt-1 w-12"></div>
          </div>
        </div>
      ))}
    </div>
  </SkeletonCard>
);
