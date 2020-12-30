import React, { useState } from 'react'
import { render } from 'react-dom'
import { useTrail, a } from 'react-spring'
import './styles.css'

function Trail({ open, children, ...props }) {

  const items = React.Children.toArray(children)

  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 50 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })

  return (
    <div className="trails-main" {...props}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <a.div
            key={items[index]}
            className="trails-text"
            style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${x}px,0)`) }}>
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    </div>
  )
}

function Desc() {
  const [open, set] = useState(true)
  return (
    <Trail open={open} onClick={() => set((state) => !state)}>
      <a>Hello, my name is <span className='mir'>Mira</span>,</a>
      <a>a <span className='mir'>Visual Designer</span>.</a>
    </Trail>
  )
}

render(<Desc />, document.getElementById('root'))

export default Desc;
