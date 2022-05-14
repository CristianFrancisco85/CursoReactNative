import {useEffect, useState,useRef} from 'react';
import Geolocation from '@react-native-community/geolocation';
import { Location } from '../interfaces/appInterfaces';

export const useLocation = () => {

    const [hasLocation, setHasLocation] = useState(false);
    const [routeLines,setRouteLines] = useState<Location[]>([])
    const [initialPosition, setInitialPosition] = useState<Location>({
        latitude: 0,
        longitude: 0,
    });
    const [currentPosition, setCurrentPosition] = useState<Location>({
        latitude: 0,
        longitude: 0
    });

    const watchId = useRef<number>()
    const isMounted = useRef(true)

    useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        }

    }, []);

    useEffect(() => {

        if(!isMounted.current) return;

        getCurrenteLocation().then(location => {
            setInitialPosition(location);
            setCurrentPosition(location);
            setRouteLines(routes => [...routes,location]);
            setHasLocation(true);
        })

    }, []);

    const getCurrenteLocation = (): Promise<Location> => {
        return new Promise((resolve, reject) => {
            Geolocation.getCurrentPosition(
                info => {
                    resolve({
                        latitude: info.coords.latitude,
                        longitude: info.coords.longitude
                    });
                },
                error => reject(error),
                { enableHighAccuracy: true }
            );
        })
    }

    const followUserLocation = () => {
        watchId.current = Geolocation.watchPosition(
            info => {

                if(!isMounted.current) return;

                const location = {
                    latitude: info.coords.latitude,
                    longitude: info.coords.longitude
                }

                setCurrentPosition(location);
                setRouteLines(routes => [...routes,location]);
            },
            error => console.log(error),
            { enableHighAccuracy: true, distanceFilter: 10 }
        );
    }

    const stopFollowUserLocation = () => {
        if (watchId.current) {
            Geolocation.clearWatch(watchId.current);
        }
    }


    return{
        initialPosition,
        currentPosition,
        routeLines,
        hasLocation,
        getCurrenteLocation,
        followUserLocation,
        stopFollowUserLocation
    }
};
