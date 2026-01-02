import { use, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { usePostHog } from "posthog-js/react";

const PHpageViewTraker = () => {
    const location = useLocation();
    const posthog = usePostHog()
    useEffect(() => {
        if (posthog) {
            posthog.capture('$pageview')
        }
    }, [location, posthog])
    return null;
};

export default PHpageViewTraker;