'use strict';

import React from 'react';

/**
 * Landing View
 * @extends {React.Component}
 */
class Landing extends React.Component {
  /**
   * @desc sets initial state
   */
  constructor () {
    super();
  }

  /**
   * @returns {XML}
   */
  render() {
    // due to flash of unstyled content the html for the example cards has
    // been copied from a render CodeMirror component
    return (
      <section className="landing">
        <div className="landing-intro">
          <div className="landing-logo">
            <span className="landing-logo-text">Keep The Axe Sharp</span>
          </div>
          <h2 className="landing-title">Ever find yourself on the same Stack Overflow answer time and time again?</h2>
          <p className="landing-desc">Keep The Axe Sharp uses flashcards and a repetition spaced learning algorithm to help programmers commit easy forgotten patterns, edge cases and shortcuts to memory.</p>
          <p className="landing-desc">We support over 20 language syntaxes for our cards, including Ruby, C, C#, Go, Javascript, CoffeeScript, CSS, PHP, Java, Python, SQL, Perl and Clojure.</p>
          <a href="/auth/github" className="btn btn-icon landing-auth"><i className="fa fa-github"></i> Login with Github</a>
          <small className="landing-cards-small">It&#39;s free</small>
        </div>
        <div className="landing-cards-overlay"></div>
        <section className="landing-cards">
          <div className="card-container">

            <div className="card card-current">
              <div className="card-front">
                <div className="card-front-content">
                  <div className="CodeMirror cm-s-solarized">
                    <div className="CodeMirror-scroll">
                      <div className="CodeMirror-sizer">
                        <div className="CodeMirror-lines">
                          <div className="CodeMirror-code">
                            <pre className=""><span className="cm-comment"># What’s the issue with the controller code below?</span></pre>
                            <pre className=""><span className="cm-comment"># How would you fix it?</span></pre>
                            <pre className=""><span cm-text="">&#8203;</span></pre>
                            <pre className=""><span className="cm-keyword">className</span> <span className="cm-tag">CommentsController</span> <span className="cm-operator">&lt;</span> <span className="cm-tag">ApplicationController</span></pre>
                            <pre className="">  <span className="cm-keyword">def</span> <span className="cm-def">users_comments</span></pre>
                            <pre className="">    <span className="cm-variable">posts</span> <span className="cm-operator">=</span> <span className="cm-tag">Post</span><span className="cm-operator">.</span><span className="cm-property">all</span></pre>
                            <pre className="">    <span className="cm-variable">comments</span> <span className="cm-operator">=</span> <span className="cm-variable">posts</span><span className="cm-operator">.</span><span className="cm-property">map</span>(&amp;<span className="cm-atom">:comments</span>)<span className="cm-operator">.</span><span className="cm-property">flatten</span></pre>
                            <pre className="">    <span className="cm-variable-2">@user_comments</span> <span className="cm-operator">=</span> <span className="cm-variable">comments</span><span className="cm-operator">.</span><span className="cm-property">select</span> <span className="cm-keyword">do</span> |<span className="cm-def">comment</span>|</pre>
                            <pre className="">      <span className="cm-variable">comment</span><span className="cm-operator">.</span><span className="cm-property">author</span><span className="cm-operator">.</span><span className="cm-property">username</span> <span className="cm-operator">==</span> <span className="cm-variable">params</span>[<span className="cm-atom">:username</span>]</pre>
                            <pre className="">    <span className="cm-keyword">end</span></pre>
                            <pre className="">  <span className="cm-keyword">end</span></pre>
                            <pre className=""><span className="cm-keyword">end</span></pre>
                            <pre className=""><span cm-text="">&#8203;</span></pre>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card card-second">
              <div className="card-front">
                <div className="card-front-content">
                  <div className="CodeMirror cm-s-solarized">
                    <div className="CodeMirror-scroll">
                      <div className="CodeMirror-sizer">
                        <div className="CodeMirror-lines">
                          <div className="CodeMirror-code">
                            <pre><span><span className="cm-variable">#</span> <span className="cm-variable">Deferpackage</span> <span className="cm-variable">main</span></span></pre>
                            <pre><span><span cm-text="">&#8203;</span></span></pre>
                            <pre><span><span className="cm-keyword">import</span> <span className="cm-string">"fmt"</span></span></pre>
                            <pre><span><span cm-text="">&#8203;</span></span></pre>
                            <pre><span><span className="cm-keyword">func</span> <span className="cm-variable">main</span>&#40;&#41; &#123;</span></pre>
                            <pre><span>    <span className="cm-keyword">defer</span> <span className="cm-variable">fmt</span><span className="cm-number">.</span><span className="cm-variable">Println</span>(<span className="cm-string">"world"</span>) <span className="cm-comment">//use of keyword `defer`</span></span></pre>
                            <pre><span><span cm-text="">&#8203;</span></span></pre>
                            <pre><span>    <span className="cm-variable">fmt</span><span className="cm-number">.</span><span className="cm-variable">Println</span>(<span className="cm-string">"hello"</span>)</span></pre>
                            <pre><span>    <span className="cm-variable">fmt</span><span className="cm-number">.</span><span className="cm-variable">Println</span>(<span className="cm-string">"hello"</span>)</span></pre>
                            <pre><span>&#123;</span></pre>
                            <pre><span><span cm-text="">&#8203;</span></span></pre>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card card-third">
              <div className="card-front">
                <div className="card-front-content">
                  <div className="CodeMirror cm-s-solarized">
                    <div className="CodeMirror-scroll">
                      <div className="CodeMirror-sizer">
                        <div className="CodeMirror-lines">
                          <div className="CodeMirror-code">
                             <pre><span>                                <span className="cm-qualifier">.overlay</span> <span className="cm-tag">article</span> &#123;</span></pre>
                             <pre><span>                                  <span className="cm-property">position</span>: <span className="cm-atom">absolute</span>;</span></pre>
                             <pre><span>                                  <span className="cm-property">left</span>: <span className="cm-number">50%</span>;</span></pre>
                             <pre><span>                                  <span className="cm-property">top</span>: <span className="cm-number">50%</span>;</span></pre>
                             <pre><span>                                  <span className="cm-property">margin</span>: <span className="cm-number">-200px</span> <span className="cm-number">0</span> <span className="cm-number">0</span> <span className="cm-number">-200px</span>;</span></pre>
                             <pre><span>                                  <span className="cm-property">width</span>: <span className="cm-number">400px</span>;</span></pre>
                             <pre><span>                                  <span className="cm-property">height</span>: <span className="cm-number">400px</span>;</span></pre>
                             <pre><span>                                &#125;</span></pre>
                             <pre><span><span cm-text="">&#8203;</span></span></pre>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </section>
    );
  }

}

export default Landing;
