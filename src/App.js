import "./App.css";
import { useState } from "react";
import Tableau from "./visualizations/Tableau";
import Tableau2 from "./visualizations/Tableau2";
import { Tab, Tabs } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [key, setKey] = useState("pop cats");

  const mapURL =
    "https://public.tableau.com/views/Book1_16688508098930/Dashboard1";
  const openingHoursURL =
    "https://public.tableau.com/views/OpeningHoursAnalysisHeatmap/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link";
  const correlationURL =
    "https://public.tableau.com/views/CorrelationMatrixHeatmap2_ColorAdjusted/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link";
  const sunburstURL =
    "https://public.tableau.com/views/sunburstgraph_ColorAdjusted/Sheet1";
  const commentTreemapURL =
    "https://public.tableau.com/views/Project_Treemap_ColorAdjusted/Sheet1";
  const popularCategoryJoyplotURL =
    "https://public.tableau.com/views/joyplot_16688597647320/JoyPlotYear?:language=en-US&:display_count=n&:origin=viz_share_link"
  const influentialUsersBubbleChartURL =
    "https://public.tableau.com/views/Project_InfluentialUser/ClusteredDiagram?:language=en-US&:display_count=n&:origin=viz_share_link"
  return (
    <div className="App">
      <h1>COMP 4462 Yelp Dashboard</h1>
      <b>Group 5</b>
      <div className="row">
        <div className="col">
          Cheng Tsun Hei (20691477) | Chiu Chun Hei Wilson (20661123) | Hui
          Nathan C (20545563) | Siu Wing Ling (20693059) | Wong Cheuk Wah Jane
          (20693487)
        </div>
      </div>

      <div className="col">
        <div
          style={{ marginLeft: "auto", marginRight: "auto", display: "block" }}
        >
          <Tableau2 url={mapURL} height={700} width={"90vw"} />
        </div>
        <div>
          <Tabs
            defaultActiveKey="pop cats"
            id="tabs"
            className="mb-3"
            onSelect={(k) => setKey(k)}
          >
            <Tab eventKey="pop cats" title="Popular Categories">
              {key === "pop cats" && <Tableau2 width={"90vw"} height={"800px"} url={popularCategoryJoyplotURL} />}
            </Tab>
            <Tab eventKey="correlation" title="Attribute Correlation">
              {key === "correlation" && (
                <Tableau2 url={correlationURL} width={"90vw"} height={1000} />
              )}
            </Tab>
            <Tab eventKey="opening hours" title="Opening Hours">
              {key === "opening hours" && <Tableau2 width={"1300px"} height={"800px"} url={openingHoursURL} />}
            </Tab>
            <Tab eventKey="comment analysis" title="Comment Analysis">
              {key === "comment analysis" && (
                <div className="row">
                  <div className="col-6">
                    <Tableau2 url={commentTreemapURL} width={"50vw"} height={600} />
                  </div>
                  <div className="col-6">
                    <Tableau2 url={sunburstURL} width={"50vw"} height={600} />
                  </div>
                </div>
              )}
            </Tab>
            <Tab eventKey="influential users" title="Influential Users">
              <Tableau2 url={influentialUsersBubbleChartURL} width={"90vw"} height={600} />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default App;
