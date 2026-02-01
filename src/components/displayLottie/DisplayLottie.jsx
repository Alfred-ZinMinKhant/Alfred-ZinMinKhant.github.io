import React, { useEffect, useState, Suspense } from "react";
import Loading from "../../containers/loading/Loading";

const LazyLottie = React.lazy(() => import("lottie-react"));

export default function DisplayLottie({ animationData, animationPath, loop = true }) {
  const [data, setData] = useState(animationData || null);

  useEffect(() => {
    let mounted = true;
    if (animationData) {
      setData(animationData);
      return;
    }
    if (!animationPath) return;

    // dynamic import of JSON animation; Vite will include files under assets/lottie
    import(/* @vite-ignore */ `../../assets/lottie/${animationPath}`)
      .then((mod) => {
        if (!mounted) return;
        const payload = mod && (mod.default || mod);
        // remove white solid layers as before
        let animation = payload;
        try {
          animation = JSON.parse(JSON.stringify(payload));
          if (Array.isArray(animation.layers)) {
            animation.layers = animation.layers.filter((layer) => {
              if (layer && layer.ty === 1 && layer.sc) {
                const color = String(layer.sc).toLowerCase();
                return color !== "#ffffff" && color !== "white";
              }
              return true;
            });
          }
        } catch (e) {
          animation = payload;
        }
        setData(animation);
      })
      .catch(() => {
        setData(null);
      });

    return () => {
      mounted = false;
    };
  }, [animationData, animationPath]);

  if (!data) return <Loading />;

  return (
    <Suspense fallback={<Loading />}>
      <LazyLottie animationData={data} loop={loop} />
    </Suspense>
  );
}
