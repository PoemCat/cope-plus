import React, { useRef, useState } from 'react';
import { Button } from 'antd';
import styles from './home.scss';

export default function Home(): React.ReactElement {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [text, setText] = useState<string>('Btn1aaaaaaaaaaaaaaaaaaaaa');
  return (
    <div>
      <Button onClick={() => setText('Btn2aaaaaaaaaaaaaa')} type="primary">
        {text}
      </Button>
      <video className={styles.video} ref={videoRef}>
        <track
          kind="subtitles"
          src="subs_chi.srt"
          srcLang="zh"
          label="Chinese"
        />
      </video>
    </div>
  );
}
