import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeTheme } from 'actions'

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = { menuOpen: false }
    this.themes = {
      dark: 'bg-white-15 white',
      light: 'bg-black-15 black fw4'
    }
  }

  toggleMenu = () => {
    this.setState(({ menuOpen }) => ({ menuOpen: !menuOpen }))
  }

  render() {
    const { menuOpen } = this.state
    const { toggleMenu } = this
    const themeClass = this.themes[this.props.theme]
    const baseClass = 'menu absolute top-0 right-0 z1 pointer no-select tr'
    const menuClass = menuOpen ? `${baseClass} menu-open` : baseClass

    return (
      <div className={menuClass}>
        <div className={`${themeClass} theme-choice pa3 relative`}>
          <label htmlFor='theme' onChange={this.props.switchTheme}>
            Dark: <input type='radio' name='theme' value='dark' defaultChecked />
            Light: <input type='radio' name='theme' value='light' />
          </label>
          <div
            className={`${themeClass} menu-title dit absolute right-0 bottom-0 pv2 w-50 tc`}
            onClick={toggleMenu}
          >
            {menuOpen ? 'CLOSE' : 'THEME'}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ systemInfo }) => ({ theme: systemInfo.theme })
const mapDispatchToProps = dispatch => ({
  switchTheme: e => dispatch(changeTheme(e.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
