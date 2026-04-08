'use client'

export default function Showcase() {
  return (
    <section className="showcase-section" id="showcase">
      {/* Background Text Rows */}
      <div className="bg-text-container">
        <div className="bg-text-row row-1">
          <span>AKBAR ALI TECH</span>
          <span>AKBAR ALI TECH</span>
          <span>AKBAR ALI TECH</span>
        </div>
        <div className="bg-text-row row-2">
          <span>FULL STACK DEVELOPER</span>
          <span>FULL STACK DEVELOPER</span>
          <span>FULL STACK DEVELOPER</span>
        </div>
        <div className="bg-text-row row-3">
          <span>AKBAR ALI</span>
          <span>AKBAR ALI</span>
          <span>AKBAR ALI</span>
        </div>
        <div className="bg-text-row row-4">
          <span>FULL STACK DEVELOPER</span>
          <span>FULL STACK DEVELOPER</span>
          <span>FULL STACK DEVELOPER</span>
        </div>
        <div className="bg-text-row row-5">
          <span>AKBAR ALI TECH</span>
          <span>AKBAR ALI TECH</span>
          <span>AKBAR ALI TECH</span>
        </div>
        <div className="bg-text-row row-6">
          <span>FULL STACK DEVELOPER</span>
          <span>FULL STACK DEVELOPER</span>
          <span>FULL STACK DEVELOPER</span>
        </div>
      </div>

      {/* Main Showcase - Laptop/Workspace */}
      <div className="showcase-main">
        <div className="showcase-laptop">
          {/* Laptop Screen */}
          <div className="laptop-display">
            <div className="display-frame">
              <div className="display-notch"></div>
              <div className="display-content">
                {/* Code Editor */}
                <div className="code-preview">
                  <div className="code-header">
                    <div className="code-dots">
                      <span className="dot red"></span>
                      <span className="dot yellow"></span>
                      <span className="dot green"></span>
                    </div>
                    <span className="code-filename">portfolio.tsx</span>
                  </div>
                  <div className="code-body">
                    <pre className="code-text">
                      <code>
                        <span className="line"><span className="keyword">const</span> <span className="variable">developer</span> = &#123;</span>
                        <span className="line">  <span className="property">name</span>: <span className="string">&quot;Akbar Ali &quot;</span>,</span>
                        <span className="line">  <span className="property">role</span>: <span className="string">&quot;Full Stack Developer&quot;</span>,</span>
                        <span className="line">  <span className="property">skills</span>: [</span>
                        <span className="line">    <span className="string">&quot;Tailwind &quot;</span>, <span className="string">&quot; React &quot;</span>, <span className="string">&quot;Node.js&quot;</span>,</span>
                        <span className="line">    <span className="string">&quot;Express&quot;</span>, <span className="string">&quot;MongoDB&quot;</span>, <span className="string">&quot;MySQL&quot;</span>,</span>
                        <span className="line">    <span className="string">&quot;Firebase&quot;</span>, <span className="string">&quot;Wordpress&quot;</span></span>
                        <span className="line">  ],</span>
                        <span className="line">  <span className="function">build</span>: () =&gt; <span className="string">&quot;Amazing Apps&quot;</span></span>
                        <span className="line">&#125;</span>
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Laptop Base */}
          <div className="laptop-keyboard">
            <div className="keyboard-surface">
              <div className="keyboard-keys">
                {/* Row 1 */}
                <div className="key-row">
                  <div className="key">~</div>
                  <div className="key">1</div>
                  <div className="key">2</div>
                  <div className="key">3</div>
                  <div className="key">4</div>
                  <div className="key">5</div>
                  <div className="key">6</div>
                  <div className="key">7</div>
                  <div className="key">8</div>
                  <div className="key">9</div>
                  <div className="key">0</div>
                  <div className="key">-</div>
                  <div className="key">=</div>
                  <div className="key wide">⌫</div>
                </div>
                {/* Row 2 */}
                <div className="key-row">
                  <div className="key wide">⇥</div>
                  <div className="key">Q</div>
                  <div className="key">W</div>
                  <div className="key">E</div>
                  <div className="key">R</div>
                  <div className="key">T</div>
                  <div className="key">Y</div>
                  <div className="key">U</div>
                  <div className="key">I</div>
                  <div className="key">O</div>
                  <div className="key">P</div>
                  <div className="key">[</div>
                  <div className="key">]</div>
                  <div className="key">\</div>
                </div>
                {/* Row 3 */}
                <div className="key-row">
                  <div className="key wide">⇪</div>
                  <div className="key">A</div>
                  <div className="key">S</div>
                  <div className="key">D</div>
                  <div className="key highlight">F</div>
                  <div className="key">G</div>
                  <div className="key">H</div>
                  <div className="key highlight">J</div>
                  <div className="key">K</div>
                  <div className="key">L</div>
                  <div className="key">;</div>
                  <div className="key">&apos;</div>
                  <div className="key wide">↵</div>
                </div>
                {/* Row 4 */}
                <div className="key-row">
                  <div className="key wide">⇧</div>
                  <div className="key">Z</div>
                  <div className="key">X</div>
                  <div className="key">C</div>
                  <div className="key">V</div>
                  <div className="key">B</div>
                  <div className="key">N</div>
                  <div className="key">M</div>
                  <div className="key">,</div>
                  <div className="key">.</div>
                  <div className="key">/</div>
                  <div className="key wide">⇧</div>
                </div>
                {/* Row 5 - Space bar */}
                <div className="key-row">
                  <div className="key">fn</div>
                  <div className="key">⌃</div>
                  <div className="key">⌥</div>
                  <div className="key wide">⌘</div>
                  <div className="key spacebar"></div>
                  <div className="key wide">⌘</div>
                  <div className="key">⌥</div>
                  <div className="key arrow-group">
                    <span className="arrow-up">▲</span>
                    <div className="arrow-bottom">
                      <span>◀</span>
                      <span>▼</span>
                      <span>▶</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Laptop Trackpad */}
          <div className="laptop-trackpad"></div>
        </div>

        {/* Side Elements */}
        <div className="showcase-badge">
          <span className="badge-text">Available for</span>
          <span className="badge-highlight">Hire</span>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="floating-element el-1">
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      </div>
      <div className="floating-element el-2">
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      </div>
    </section>
  )
}
