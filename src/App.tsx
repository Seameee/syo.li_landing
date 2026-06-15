import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleQuote = useCallback(() => {
    setIsVisible((prev) => !prev)
  }, [])

  return (
    <main className="container">
      {/* 主内容区：图片 + 台词 */}
      <section className="main-content">
        {/* Soyorin 展示图 */}
        <div className="image-container">
          <img
            src="https://storage.moegirl.org.cn/moegirl/commons/c/c2/BanG_Dream%21_It%27s_MyGO%21%21%21%21%21_10163704.jpg"
            alt="Soyorin"
            className="soyorin-image"
          />
        </div>

        {/* 台词区：按钮 + 名台词 + 对话框 */}
        <div className="quote-wrapper">
          {/* 点击触发按钮 */}
          <button
            className="surprise-btn"
            onClick={toggleQuote}
            aria-label="点击查看更多"
          >
            <img
              src="https://storage.moegirl.org.cn/moegirl/commons/3/30/Nagasaki_Soyo_icon.png"
              alt="Soyorin"
              className="surprise-avatar"
            />
          </button>

          {/* 名台词 */}
          <div
            className="quote-container"
            style={{ opacity: isVisible ? 0 : 1, transition: 'opacity 0.2s ease' }}
          >
            <a
              href="https://mzh.moegirl.org.cn/%E9%95%BF%E5%B4%8E%E7%88%BD%E4%B8%96"
              target="_blank"
              rel="noopener noreferrer"
              className="quote-link"
              title="点击访问萌娘百科 - 长崎素世"
            >
              <span className="quote-mark">「</span>
              <span className="quote-text">既然这样，就由我来结束掉！</span>
              <span className="quote-mark">」</span>
            </a>
          </div>

          {/* 展开的对话框 */}
          <div
            className={`quote-box ${isVisible ? 'visible' : ''}`}
            onClick={(e) => {
              if ((e.target as HTMLElement).tagName !== 'A') {
                toggleQuote()
              }
            }}
          >
            <div className="quote-bubble">
              <span className="quote-name">爽世</span>
              <div className="quote-content">
                为什么要演奏《
                <a
                  href="https://mzh.moegirl.org.cn/%E6%98%A5%E6%97%A5%E5%BD%B1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="quote-song"
                >
                  春日影
                </a>
                》？！！
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 页脚：联系方式 + 计数器 */}
      <footer className="footer">
        <a
          href="https://t.me/Ayanottbot"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          Telegram: @Ayanottbot
        </a>
        <div className="counter">
          <img
            src="https://count.getloli.com/@syo.li.count?name=syo.li.count&theme=booru-lewd&padding=7&offset=0&align=center&scale=1&pixelated=1&darkmode=auto"
            alt="Moe Counter"
            className="counter-img"
          />
        </div>
      </footer>
    </main>
  )
}

export default App
