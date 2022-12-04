/**
  * Accordion.js
  * Contributors: Luuk Deen, Lucas van Osenenbruggen
  * Description: renders advice in an accordion
  * edited from https://kps250.medium.com/creating-an-accordion-in-react-native-f313748b7b46
  */
import React, { Component } from 'react' // import react
import { View, TouchableOpacity, Text, LayoutAnimation } from 'react-native' // import react-native
import PropTypes from 'prop-types' // to validation props during runtime
import RenderHtml from 'react-native-render-html' // library to render html as react component
import { GenerateQR } from '../components/Share' // for generating the QR code of each advice

/**
 * Accordion component, contains advice
 * @class Accordion
 * @memberOf Component
 */
class Accordion extends Component {
  // Construct props
  constructor (props) {
    super(props)
    this.title = props.title
    this.data = { html: props.data }
    this.QRString = 'https://' + props.title + '\n' + props.data
    this.state = {
      expanded: false,
      expandedQR: false
    }
  }

  // Render accordion
  render () {
    return (
      <View>
        {/* Render title */}
        <TouchableOpacity ref={this.Accordion} onPress={this.toggleExpand}>
          <Text>{this.title}</Text>
        </TouchableOpacity>

        {/* Render data when title is pressed */}
        <View/>
          {
            this.state.expanded &&
            <View>
              <RenderHtml
                source={this.data}
                contentWidth={500} // Suppresses unneccesary error
              />

              {/* Render QR code text */}
              <TouchableOpacity ref={this.Accordion} onPress={this.toggleExpandQR}>
                <Text>Bekijk QR code om advies te delen</Text>
              </TouchableOpacity>

              {/* Render QR code when text is pressed */}
              <View/>
              {
                this.state.expandedQR &&
                <View>
                  {GenerateQR(this.QRString)}
                </View>
              }
            </View>
          }
      </View>
    )
  }

  // Functions to toggle expanded state of accordion and QR
  toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState({ expanded: !this.state.expanded })
  }

  toggleExpandQR = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState({ expandedQR: !this.state.expandedQR })
  }
}

/**
 * Advices component, renders accordions
 * @class Advices
 * @memberOf Component
 */
class Advices extends Component {
  render () {
    const items = []
    let key = 0
    // Add an accordion to the object for each advice
    for (const advice of this.props.advices) {
      items.push(
        <Accordion
          title = {advice.protocol + ': ' + advice.pad}
          data = {advice.action}
          key={key.toString()}
        />
      )
      key += 1
    }
    return items
  }
}

// Validate props
Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.node.isRequired
}
Advices.propTypes = {
  advices: PropTypes.array.isRequired
}

module.exports = {
  Advices,
  Accordion
}

// export Advices class
export default { Advices }
