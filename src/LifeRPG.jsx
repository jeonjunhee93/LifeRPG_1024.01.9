import React, { useState } from 'react'
import './index.css'
import character from './assets/silhouette.png'
import swordCommon from './assets/sword_common.png'
import swordRare from './assets/sword_rare.png'

const LifeRPG = () => {
  const [quests, setQuests] = useState([])
  const [inventory, setInventory] = useState([])
  const [selectedReward, setSelectedReward] = useState(null)

  const addQuest = (title, difficulty) => {
    const xp = Math.floor(Math.random() * 10) + 5
    const gold = Math.floor(Math.random() * 20) + 10
    const rewardItem = Math.random() < 0.3 ? '무기' : null
    setQuests([...quests, { title, difficulty, xp, gold, rewardItem, claimed: false }])
  }

  const claimReward = (index) => {
    const updated = [...quests]
    if (!updated[index].claimed) {
      updated[index].claimed = true
      if (updated[index].rewardItem) {
        alert(`아이템을 습득하였습니다: ${updated[index].rewardItem}`)
        setInventory([...inventory, updated[index].rewardItem])
      }
      setSelectedReward({ xp: updated[index].xp, gold: updated[index].gold })
    }
    setQuests(updated)
  }

  return (
    <div className="app">
      <h1>Life RPG</h1>
      <div className="character">
        <img src={character} alt="캐릭터 실루엣" />
        <div className="equipment-ui">
          <img src={swordCommon} alt="무기" className="weapon-icon" />
        </div>
      </div>

      <div className="quest-form">
        <input placeholder="퀘스트 제목" id="quest-title" />
        <input placeholder="난이도" id="quest-difficulty" />
        <button onClick={() => {
          const title = document.getElementById('quest-title').value
          const difficulty = document.getElementById('quest-difficulty').value
          addQuest(title, difficulty)
        }}>퀘스트 추가</button>
      </div>

      <div className="quests">
        {quests.map((q, idx) => (
          <div key={idx}>
            <strong>{q.title}</strong> - 난이도: {q.difficulty}
            {!q.claimed ? (
              <button onClick={() => claimReward(idx)}>보상 수령</button>
            ) : (
              <span>✔ 수령 완료</span>
            )}
          </div>
        ))}
      </div>

      {selectedReward && (
        <div className="reward">
          <p>XP: {selectedReward.xp}, 골드: {selectedReward.gold}</p>
        </div>
      )}

      <div className="shop">
        <h3>상점</h3>
        <ul>
          <li>📺 TV 시청 - 20G</li>
          <li>▶ 유튜브 시청 - 15G</li>
          <li>💤 휴식 30분 - 10G</li>
        </ul>
      </div>

      <div className="inventory">
        <h3>인벤토리</h3>
        <ul>
          {inventory.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default LifeRPG
