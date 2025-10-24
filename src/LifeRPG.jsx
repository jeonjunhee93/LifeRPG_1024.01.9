
import React from 'react';
import silhouette from './assets/silhouette.png';
import swordCommon from './assets/sword_common.png';
import swordRare from './assets/sword_rare.png';

const LifeRPG = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ position: 'relative' }}>
        <img src={silhouette} alt="silhouette" style={{ width: '300px' }} />
        <img src={swordCommon} alt="common sword" style={{ position: 'absolute', top: '140px', left: '100px', width: '40px' }} />
        <img src={swordRare} alt="rare sword" style={{ position: 'absolute', top: '140px', left: '150px', width: '40px' }} />
      </div>
      <div style={{ marginLeft: '30px' }}>
        <h2>퀘스트 입력</h2>
        <input placeholder="퀘스트 이름" />
        <input placeholder="난이도 (1~10)" type="number" />
        <button>퀘스트 추가</button>
        <div>※ 추후 기능 추가 예정</div>
      </div>
    </div>
  );
};

export default LifeRPG;
