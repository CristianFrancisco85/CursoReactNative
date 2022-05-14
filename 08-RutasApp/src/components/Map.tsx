import React, { useEffect, useRef, useState } from 'react';
import MapView, { Marker ,Polyline} from 'react-native-maps';
import { useLocation } from '../hooks/useLocation';
import { LoadingScreen } from '../screens/LoadingScreen';
import { Fab } from './Fab';


export const Map = () => {

    const [showPolyline, setShowPolyline] = useState(false);

    const {hasLocation,
        initialPosition,
        getCurrenteLocation,
        routeLines,
        followUserLocation,
        currentPosition,
        stopFollowUserLocation} = useLocation();

    const mapViewRef = useRef<MapView>();
    const followingRef = useRef<boolean>(true);

    useEffect(() => {
        followUserLocation();
        return () => {
            stopFollowUserLocation()
        }

    } , []);

    useEffect(() => {

        if (!followingRef.current) return;

        const {latitude,longitude} = currentPosition;

        mapViewRef.current?.animateCamera({
            center: {latitude,longitude},
            zoom: 16
        });

    } , [currentPosition]);

    const centerPosition = async () => {

        const {latitude,longitude} = await getCurrenteLocation();
        followingRef.current = true;

        mapViewRef.current?.animateCamera({
            center: {latitude,longitude},
            zoom: 16
        });

    }

    if (!hasLocation) {
        return <LoadingScreen/>
    }

    return (
        <>
        <MapView
            ref={el => mapViewRef.current = el!}
            style={{flex:1}}
            initialRegion={{
            latitude: initialPosition!.latitude,
            longitude: initialPosition!.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }}
            showsUserLocation
            onTouchStart={()=> followingRef.current = false}
        >
            {
                showPolyline && routeLines.length > 1 &&
                <Polyline
                    coordinates={routeLines}
                    strokeWidth={3}
                    strokeColor="black"
                />
            }
            {/*<Marker
                coordinate={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                }}
                title='Mi Marcador'
                description='Mi descripcion'
                image={require('../assets/custom-marker.png')}
            />*/}
        
        </MapView>


        <Fab
            iconName='compass-outline'
            onPress={centerPosition}
            style={{
                position: 'absolute',
                bottom: 20,
                right: 20,
            }}
        />

        <Fab
            iconName='brush-outline'
            onPress={() => setShowPolyline(!showPolyline)}
            style={{
                position: 'absolute',
                bottom: 80,
                right: 20,
            }}
        />

        </>
    )
};
