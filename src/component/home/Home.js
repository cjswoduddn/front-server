import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
// import Styles from './styles.css';

const SEL = 'custom-section';
const SECTION_SEL = `.${SEL}`;


const originalColors = ['#ff5f45', '#0798ec', '#fc6c7c', '#435b71', 'orange', 'blue', 'purple', 'yellow'];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionsColor: [...originalColors],
      fullpages: [
        {
          text: 'Section 1',
        },
        {
          text: 'Section 2',
        },
        {
          text: 'Section 3',
        }
      ],
    };
  }

 

  render() {
    const { fullpages } = this.state;

    if (!fullpages.length) {
      return null;
    }

    const Menu = () => (
      <div
        className="menu"
        style={{
          position: 'fixed',
          top: 0,
          zIndex: 100,
        }}
      >
        <h1>logo</h1>
      </div>
    );

    return (
      <>
        <Menu />
        <ReactFullpage
          navigation
          sectionSelector={SECTION_SEL}
          sectionsColor={this.state.sectionsColor}

          render={comp => (
            <ReactFullpage.Wrapper>
              {fullpages.map(({ text }) => (
                <div key={text} className={SEL}>
                  <h1>{text}</h1>
                </div>
              ))}
            </ReactFullpage.Wrapper>
          )}
        />
      </>
    );
  }
}

export default Home;
