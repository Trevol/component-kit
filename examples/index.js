import React from 'react'
import { Cards } from './../dist/component-kit.js';
import { BarChart } from './../dist/component-kit.js';
import { AreaChart } from './../dist/component-kit.js';
import { LineChart } from './../dist/component-kit.js';
import { PieChart } from './../dist/component-kit.js';
import { ScatterPlot } from './../dist/component-kit.js';
import { render } from 'react-dom';

var data = [
  {name: 'A', value: .08167},
  {name: 'B', value: .01492},
  {name: 'C', value: .02782},
  {name: 'D', value: .04253},
  {name: 'E', value: .12702},
  {name: 'F', value: .02288},
  {name: 'G', value: .02015},
  {name: 'H', value: .06094},
  {name: 'I', value: .06966},
  {name: 'J', value: .00153},
  {name: 'K', value: .00772},
  {name: 'L', value: .04025},
  {name: 'M', value: .02406},
  {name: 'N', value: .06749},
  {name: 'O', value: .07507},
  {name: 'P', value: .01929},
  {name: 'Q', value: .00095},
  {name: 'R', value: .05987},
  {name: 'S', value: .06327},
  {name: 'T', value: .09056},
  {name: 'U', value: .02758},
  {name: 'V', value: .00978},
  {name: 'W', value: .02360},
  {name: 'X', value: .00150},
  {name: 'Y', value: .01974},
  {name: 'Z', value: .00074}
];

var data2 = [
  {x: 2001, y: 0},
  {x: 2002, y: 30},
  {x: 2003, y: 45},
  {x: 2004, y: 46},
  {x: 2005, y: 37},
  {x: 2006, y: 20},
  {x: 2007, y: 15},
  {x: 2008, y: 30}
]

var data3 = [
  {x: 5, y: 63584},
  {x: 10, y: 42839},
  {x: 12, y: 35894},
  {x: 18, y: 58934},
  {x: 25, y: 74323},
  {x: 30, y: 24839},
  {x: 50, y: 12839}
]

var data4 = [
  {x: 2001, y: 0, t: 'k1'},
  {x: 2002, y: 30, t: 'k2'},
  {x: 2003, y: 45, t: 'k3'},
  {x: 2004, y: 46, t: 'k1'},
  {x: 2005, y: 37, t: 'k1'},
  {x: 2006, y: 20, t: 'k2'},
  {x: 2007, y: 15, t: 'k2'},
  {x: 2008, y: 30, t: 'k3'}
]

var color = [
  "#98abc5",
  "#8a89a6",
  "#7b6888",
  "#6b486b",
  "#a05d56",
  "#d0743c",
  "#ff8c00"
 ]
function App (props) {
  return (
    <div>
      <p>Examples</p>
      <BarChart width={250}
                height={200}
                data={data}
      />
      <br />
      <AreaChart width={250}
                 height={200}
                 data={data2}
      />
      <br />
      <LineChart width={250}
                 height={200}
                 data={data2}
      />
      <br />
      <PieChart width={250}
                height={200}
                radius={100}
                data={data3}
                colors={color}
      />
      <PieChart width={250}
                height={200}
                radius={100}
                donut={2}
                data={data3}
                colors={color}
        />
      <br />
      <ScatterPlot width={250}
                   height={200}
                   data={data4}
       />
      <Cards imgURI="http://placehold.it/300x200"
             width={300}
             height={350}
             imgHeight={200}
             imgWidth={300}>
        <h3>Kangaroo Valley Safari</h3>
        <p>Located two hours south of Sydney in the Southern Highlands of New South Wales, ...</p>
      </Cards>
      <br />
      <Cards imgURI="http://placehold.it/300x200"
             width={300}
             height={350}
             imgHeight={200}
             imgWidth={300}
             header="Kangaroo Valey Safari"
             detail="Located two hours south of Sydney in the Southern Highlands of New South Wales, ..."
             links={[
               {
                 href: 'http://google.com',
                 title: 'google'
               },
               {
                 href: 'http://facebook.com',
                 title: 'facebook'
               }
             ]}>
      </Cards>
    </div>
  );
}

render(<App />, document.getElementById('app'));
