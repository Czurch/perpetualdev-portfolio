import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import githubLogo from './assets/github-mark-white.svg'
import unrealLogo from './assets/unreal-logo.svg'
import './App.css'
import ThreeCanvas from './components/ThreeCanvas'
import { Text, ChakraProvider, Tabs, TabList, TabPanels, Tab, TabPanel, extendTheme, Flex} from '@chakra-ui/react'
import { TbHome } from 'react-icons/tb'
import Reference from './components/Reference'
import data from './assets/data/siteData.json'
import * as weather from './utilities/weather'

function App() {
  const [tabIndex, setTabIndex] = useState(1)

  useEffect(() => {
    weather.getCurrentWeather();
  })
  //getWeatherJSON(data.coordinates.lattitude, data.coordinates.lattitude); 

  useEffect(() =>{
    console.log(`Tab has changed: ${tabIndex}`)
  },[tabIndex])
  const hdrTextureURL = new URL('./assets/img/neon_photostudio_4k.hdr', import.meta.url);
  const theme = extendTheme({
    styles: {
      global: () => ({
        body: {
          bg: "",
        },
      }),
    },
  });

  return (
    <div className='App'>
      <ChakraProvider theme={theme}>
        <ThreeCanvas hdr={hdrTextureURL} model='./src/assets/models/portfolio-office-v4.glb' camIndex={tabIndex}/>
        <Tabs defaultIndex={2} onChange={(index) => setTabIndex(index)} align='center' variant='soft-rounded' colorScheme='green'> 
          <TabList>
            <Tab mr='10px' width='150px'>Who Am I?</Tab>
            <Tab mr='10px' width='150px'>Experience</Tab>
            <Tab mr='10px'><TbHome size={40}/></Tab>
            <Tab mr='10px' width='150px'>My Skills/Tools</Tab>
            <Tab mr='10px' width='150px'>Contact</Tab>
          </TabList>
          <TabPanels width='100%' height='100%'>
            <TabPanel id='WhoAmI'>
              <Text>
                My name is Luke Ferreira. I am a Boston-based Software Engineer and Indie Developer.
              </Text>
              <div className='flex flex-col hover:flex-row'>
                <Reference reference={data.references[0]}/>
                <Reference reference={data.references[1]}/>
              </div>
              <a href="https://github.com/czurch" target="_blank">
                <img src={githubLogo} className="logo" alt="Vite logo" />
              </a>
            </TabPanel>
            <TabPanel id='Experience'>
              <h3>Pluralsight - Farmington, Utah
                  Software Engineer
                  2022-present
              </h3>
              <Text>
                Responsible for the full Video Services life-cycle from uploading and content authoring to video delivery and embeddable player support to ensure a smooth user experience. Tasked with implementing new features to improve the user experience including; accessibility options for individuals with visual impairments, and scrubbing thumbnails to the catalog of video learning modules. Wrote and maintained a Node, React, PostgreSQL stack as well as created and maintained RESTful APIs. Utilized tools like Gitlab, Postman, Kafka, Mux, and Docker to streamline development and ensure seamless integration. Monitored and triaged error in the video service, ensuring no downtime by responding to OpsGenie alerts and analyzing live issues. Lead a team to integrate code between Pluralsight and a newly acquired company, extending learning modalities for both platforms and creating a unified learning experience for the end user.
              </Text>

              <h3>DELL EMC – Hopkinton, Massachusetts
                  Software Engineer
                  July 2016 – 2022	
              </h3>
              <Text>
                Maintained, organized and restructured the working code-base of EMC’s flagship VMAX system. Specifically addressing bugs and updates to the code regarding the cache structures. Took part in the full development lifecycle including testing, continuous integration, delivery and support of microservice based products. Wrote clean, modular code that adheres to strict coding standards. Emphasis on multi-threaded, parallel programming concepts and memory management in C. Able to work in Linux environments, as well as to create and learn new command line interfaces. Requires deep knowledge in C, the ability to collaborate using Git, as well as an understanding of Linux CLI.
              </Text>
            </TabPanel>
            <TabPanel id='Home'>
              <div style={{'height':'100%', 'width':'100%', 'display':'flex', justifyContent:'center', 'alignContent':'center'}}>
                <h1>Perpetual Dev.</h1>
              </div>
            </TabPanel>
            <TabPanel id='skills'>
              <a href="https://www.unrealengine.com/" target="_blank">
                  <img src={unrealLogo} className="logo" alt="UE logo" />
              </a>
              <a href="https://reactjs.org" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
            </TabPanel>
            <TabPanel id='Contact'>
              <div style={{'height':'100%', 'width':'100%', 'display':'flex', 'alignContent':'center'}}>
                <h1>Contact Information</h1>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </ChakraProvider>
    </div>
    
  )
}

export default App
