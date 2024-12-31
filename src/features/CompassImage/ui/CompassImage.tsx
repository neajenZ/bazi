import React, { useCallback, useMemo, useState } from 'react';
import { useCompassPageStore } from '@providers/CompassPageProvider/ui/StoreProvider.tsx';
import { observer } from 'mobx-react-lite';

export const BaseImageWithOverlay: React.FC = observer(() => {
  const [selectedCompass, setSelectedCompass] = useState<string | null>(null);
  const { mainImage, deleteCompassOnImage, mainImageRef, changeCompassOnImage } = useCompassPageStore();


  const findImageOfContainer = useCallback(() => {
    if (!mainImageRef.current) return;

    const relativeImage = mainImageRef.current.querySelector('img#relative-img')
    if (!relativeImage) return;
    return relativeImage.getBoundingClientRect()
  }, [mainImageRef.current])

  const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(value, max));

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>, id: string) => {
    const boundingRect = findImageOfContainer();

    if (!boundingRect) return;

    const newX = e.clientX - boundingRect.left;
    const newY = e.clientY - boundingRect.top;
    const item = mainImage?.compasses.find((i) => i.id === id);

    const halfWidthElement = e.currentTarget.clientWidth / 2;
    const halfHeightElement = e.currentTarget.clientHeight / 2;

    const clampedX = Math.max(
      halfWidthElement,
      Math.min(e.clientX - boundingRect.left, boundingRect.width - halfWidthElement), // Учитываем размер изображения (50x50)
    );
    const clampedY = Math.max(
      halfHeightElement,
      Math.min(e.clientY - boundingRect.top, boundingRect.height - halfHeightElement), // Учитываем размер изображения (50x50)
    );
    changeCompassOnImage(id, {
      x: clampedX,
      y: clampedY,
      rotation: item!.rotation,
    });
  };

  // Перетаскивание компаса
  const handleDrag = (id: string, e: React.MouseEvent<HTMLDivElement> | TouchEvent) => {
    e.preventDefault()
    const rect = findImageOfContainer();
    if (!selectedCompass || !rect || !e.currentTarget) return;

    const halfWidthElement = e.currentTarget.clientWidth / 2;
    const halfHeightElement = e.currentTarget.clientHeight / 2;

    const clientX =
      "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY =
      "touches" in e ? e.touches[0].clientY : e.clientY;

    const x = Math.max(
      halfWidthElement,
      Math.min(clientX - rect.left, rect.width - halfWidthElement),
    );
    const y = Math.max(
      halfHeightElement,
      Math.min(clientY - rect.top, rect.height - halfHeightElement),
    );
    const item = mainImage?.compasses.find((i) => i.id === id);
    changeCompassOnImage(id, {
      x,
      y,
      rotation: item!.rotation,
    });
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement> | TouchEvent, id: string) => {
    e.preventDefault()
    setSelectedCompass(id)
    // e.dataTransfer.setDragImage(new Image(), 0, 0); // Убираем стандартный DragPreview
  };

  const handleRotate = (id: string, rotationDelta: number) => {
    const item = mainImage?.compasses.find((i) => i.id === id);
    changeCompassOnImage(id, {
      x: item!.x,
      y: item!.y,
      rotation: rotationDelta,
    });
  };

  const imgPath = useMemo(
    () => mainImage?.image && URL.createObjectURL(mainImage!.image),
    [mainImage],
  );

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', margin: 'auto' }}>
      {/* Базовое изображение */}
      <div
        ref={mainImageRef}
        style={{
          // backgroundImage: `url('${imgPath}')`,
          backgroundSize: 'cover',
          // width: '100%',
          // height: '100%',
          position: 'relative',
          cursor: 'crosshair',
        }}
      >
        <img src={imgPath} id={'relative-img'} alt="" />
        {/* Компасы */}
        {mainImage!.compasses.map((compass) => (
          <div
            key={compass.id}
            style={{
              position: 'absolute',
              left: compass.x,
              transform: `translate(-50%, -50%)`,
              top: compass.y,
              touchAction: 'none',
              cursor: 'grab',
            }}
            draggable
            onTouchMove={(e) => handleDrag(compass.id, e)}
            onTouchStart={(e) => handleDragStart(e, compass.id)}
            onTouchEnd={(e) => handleDragEnd(e, compass.id)}
            onDrag={(e) => handleDrag(compass.id, e)}
            onDragStart={(e) => handleDragStart(e, compass.id)}
            onDragEnd={(e) => handleDragEnd(e, compass.id)}
          >
            <img
              src={compass.path}
              style={{
                transform: `rotate(${compass.rotation}deg)`,
              }}
              alt="Compass"
            />
            <button
              style={{
                position: 'absolute',
                top: '-10px',
                right: '-10px',
                backgroundColor: 'red',
                border: 'none',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                color: 'white',
                fontSize: '12px',
                cursor: 'pointer',
              }}
              onClick={(e) => {
                deleteCompassOnImage(compass.id);
              }}
            >
              ×
            </button>
            <div
              onMouseDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
                const startX = e.clientX;
                const startY = e.clientY;
                const handleMouseMove = (moveEvent: MouseEvent) => {
                  const deltaX = moveEvent.clientX - startX;
                  const deltaY = moveEvent.clientY - startY;
                  const rotationDelta = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
                  handleRotate(compass.id, rotationDelta);
                };
                const handleMouseUp = () => {
                  document.removeEventListener('mousemove', handleMouseMove);
                  document.removeEventListener('mouseup', handleMouseUp);
                };
                document.addEventListener('mousemove', handleMouseMove);
                document.addEventListener('mouseup', handleMouseUp);
              }}
              style={{
                position: 'absolute',
                top: '-20px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '10px',
                height: '10px',
                background: 'red',
                cursor: 'pointer',
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
});
