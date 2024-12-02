import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
    };

    const handleComplete = () => {
      setIsLoading(false);
    };

    // Add event listeners for Next.js router events
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    // Clean up event listeners on component unmount
    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router.events]);

return() => {
    {loading && (
        <div className="flex h-screen items-center justify-center text-2xl bg-white">
          <div className="loader"></div>
        </div>
      )}
}
};

export default PageLoader;
