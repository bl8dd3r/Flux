const page = `
        <div class="wrapper">
            <page-group prop="page">
                <div id="home-page" class="page active" page="home">

                <header class="switch-connections page-header cf">

                    <connection-switch id="switch-controllable" class="switch-connection switch" name="ble:controllable">
                        <div class="switch--indicator off"></div>
                        <div class="switch--label">Controllable</div>
                    </connection-switch>

                    <connection-switch id="switch-hrm" class="switch-connection switch" name="ble:hrm">
                        <div class="switch--indicator off"></div>
                        <div class="switch--label">HRM</div>
                    </connection-switch>
                </header>

                <div class="data-tiles cf">
                        <div class="data-tile">
                            <h2 class="data-tile--heading">Power</h2>
                            <div class="data-tile--value-cont">
                                <data-display id=power-value"
                                              class="data-tile--value"
                                              prop="power">--</data-display>
                            </div>
                        </div>
                        <div class="data-tile">
                            <h2 class="data-tile--heading">Interval Time</h2>
                            <div class="data-tile--value-cont">
                                <time-display id="interval-time"
                                              class="data-tile--value"
                                              form="mm:ss"
                                              prop="workout:lapTime">--:--</time-display>
                            </div>
                        </div>
                        <div class="data-tile">
                            <h2 class="data-tile--heading">Heart Rate</h2>
                            <div class="data-tile--value-cont">
                                <data-display id="heart-rate-value"
                                              class="data-tile--value"
                                              prop="heartRate">--</data-display>
                            </div>
                        </div>

                        <div class="data-tile">
                            <h2 class="data-tile--heading">Target</h2>
                            <div class="data-tile--value-cont">
                                <data-display id=power-target-value"
                                              class="data-tile--value"
                                              prop="powerTarget">--</data-display>
                            </div>
                        </div>
                        <div class="data-tile">
                            <h2 class="data-tile--heading">Elapsed Time</h2>
                            <div class="data-tile--value-cont">
                                <time-display id="elapsed-time"
                                              class="data-tile--value"
                                              form="hh:mm:ss"
                                              prop="watch:elapsed">--:--:--</time-display>
                            </div>
                        </div>
                        <div class="data-tile">
                            <h2 class="data-tile--heading">Cadence</h2>
                            <div class="data-tile--value-cont">
                                <data-display id=cadence-value"
                                              class="data-tile--value"
                                              prop="cadence">--</data-display>
                            </div>
                        </div>
                    </div>

                    <div class="data-tiles cf">
                        <div class="data-tile--small">
                            <h2 class="data-tile-small--heading">Speed</h2>
                            <div class="data-tile-small--value-cont">
                                <speed-display id="speed-value"
                                              class="data-tile-small--value"
                                              prop="speed">
                                    <value>--</value>
                                    <unit class="data-tile-small--unit"></unit>
                                </speed-display>
                            </div>
                        </div>
                        <div class="data-tile--small">
                            <h2 class="data-tile-small--heading">Distance</h2>
                            <div class="data-tile-small--value-cont">
                                <distance-display id="distance-value"
                                                  class="data-tile-small--value"
                                                  prop="distance">
                                    <value>--</value>
                                    <unit class="data-tile-small--unit"></unit>
                                </distance-display>
                            </div>
                        </div>
                    </div>
                    <div class="line"></div>

                    <div class="graphs">

                        <div id="graph-power" class="graph">
                            <h4 class="graph--heading">Power</h4>
                            <data-graph class="graph--cont cf" prop="power" metric="ftp" scale="400"></data-graph>
                        </div>

                        <div class="line"></div>

                        <div id="graph-workout" class="graph">
                            <h4 id="current-workout-name" class="graph--heading">
                                <data-display prop="workout" path="name"></data-display>
                            </h4>
                            <workout-graph class="graph-workout--cont" prop="workout" metric="ftp"></workout-graph>
                        </div>

                    </div>

                    <div class="line"></div>

                    <div id="targets">
                        <div class="tab-btn-group">
                            <div id="mode-selector" class="mode-selector">
                                <tab-btn id="erg-mode-btn"
                                         class="mode active"
                                         prop="mode"
                                         effect="mode-set"
                                         param="erg">ERG</tab-btn>
                                <tab-btn id="resistance-mode-btn"
                                         class="mode"
                                         prop="mode"
                                         effect="mode-set"
                                         param="resistance">Resistance</tab-btn>
                                <tab-btn id="slope-mode-btn"
                                         class="mode"
                                         prop="mode"
                                         effect="mode-set"
                                         param="slope">Slope</tab-btn>
                            </div> <!-- end mode selector -->
                        </div> <!-- tab-btn-group -->
                        <tab-group prop="mode">
                            <div id="erg-mode-controls" class="tab active mode-controls" tab="erg">
                                <header>
                                    <div id="erg-mode-params" class="t4">0 to 0 W</div>
                                </header>
                                <div id="power-control-btn" class="number-btn">
                                    <div class="number-btn">
                                        <button is="effect-button"
                                                id="power-target-dec"
                                                class="number-btn--dec number-btn--btn btn"
                                                effect="power-target-dec">-</button>
                                        <input is="int-input"
                                               id="power-target-input"
                                               class="number-btn--value input"
                                               type="number"
                                               value="0"
                                               autocomplete="off"
                                               prop="powerTarget"
                                               effect="power-target-set" />
                                        <button is="effect-button"
                                                id="power-target-inc"
                                                class="number-btn--inc number-btn--btn btn"
                                                effect="power-target-inc">+</button>
                                    </div>
                                </div>
                            </div> <!-- end erg mode -->
                            <div id="resistance-mode-controls" class="tab mode-controls" tab="resistance">
                                <header>
                                    <div id="resistance-mode-params" class="t4">0 to 100</div>
                                </header>
                                <div id="resistance-control-btn" class="number-btn">
                                    <div class="number-btn">
                                        <button is="effect-button"
                                                id="resistance-target-dec"
                                                class="number-btn--dec number-btn--btn btn"
                                                effect="resistance-target-dec">-</button>
                                        <input is="int-input"
                                               id="resistance-target-input"
                                               class="number-btn--value input"
                                               type="number"
                                               value="0"
                                               autocomplete="off"
                                               prop="resistanceTarget"
                                               effect="resistance-target-set" />
                                        <button is="effect-button"
                                                id="resistance-target-inc"
                                                class="number-btn--inc number-btn--btn btn"
                                                effect="resistance-target-inc">+</button>
                                    </div>
                                </div>
                            </div> <!-- end resistance mode -->
                            <div id="slope-mode-controls" class="tab mode-controls" tab="slope">
                                <header>
                                    <div id="slope-mode-params" class="t4">0 to 0%</div>
                                </header>
                                <div id="slope-control-btn" class="number-btn">
                                    <div class="number-btn">
                                        <button is="effect-button"
                                                id="slope-target-dec"
                                                class="number-btn--dec number-btn--btn btn"
                                                effect="slope-target-dec">-</button>
                                        <input is="float-input"
                                               id="slope-target-input"
                                               class="number-btn--value input"
                                               type="number"
                                               value="0"
                                               autocomplete="off"
                                               points="1"
                                               prop="slopeTarget"
                                               effect="slope-target-set" />
                                        <button is="effect-button"
                                                id="slope-target-inc"
                                                class="number-btn--inc number-btn--btn btn"
                                                effect="slope-target-inc">+</button>
                                    </div>
                                </div>
                            </div> <!-- end slope mode -->
                        </tab-group>
                    </div> <!-- end targets -->

            </div> <!-- end page-home -->

            <div id="workouts-page" class="page" page="workouts">
                <div class="workouts-list" id="workouts">
                    <header class="page-header">
                        <h2 class="t2">Workouts</h2>
                    </header>

                    <div class="buildin-workouts">
                        <ul is="workout-list" id="workout-list" class="list" prop="workouts" metric="ftp">
                        </ul>
                    </div>

                    <div class="workout-load-file">
                        <h2 class="h2">Load workout:</h2>
                        <div class="file-btn">
                            <label for="workout-file" class="file-btn-label">Select</label>
                            <input is="workout-upload"
                                   id="workout-file"
                                   class="file-btn-native"
                                   name="workout-file"
                                   type="file"
                                   value=""/>
                        </div>
                    </div>
                    <br/><br/><br/>
                </div>
            </div>

            <div id="settings-page" class="page" page="settings">
                <header class="page-header">
                    <h2 class="t2">Settings</h2>
                </header>
                <div class="settings-tiles">
                    <div id="ftp-settings" class="settings-tile">
                        <label for="ftp-value" class="settings-tile-label">FTP</label>
                        <input is="int-input"
                               id="ftp-value"
                               class="settings-tile-input"
                               name="ftp-value"
                               type="number"
                               value="200"
                               prop="ftp"
                               effect="ftp-set" />
                        <button is="set-button"
                                id="ftp-btn"
                                class="flat-btn settings-tile-btn"
                                default="200"
                                effect="ftp-set"
                                prop="ftp">Set</button>
                    </div>
                    <div id="weight-settings" class="settings-tile">
                        <label id="weight-label" for="weight-value" class="settings-tile-label">
                            <unit-display type="weight">kg</unit-display>
                        </label>
                        <input is="weight-input"
                               id="weight-value"
                               class="settings-tile-input"
                               name="weight-value"
                               type="number"
                               value="75"
                               prop="weight"
                               effect="weight-set" />
                        <button is="set-button"
                                id="weight-btn"
                                class="flat-btn settings-tile-btn"
                                default="75"
                                effect="weight-set"
                                prop="weight">Set</button>
                    </div>
                </div>
                <div class="settings-btn-row">
                    <button is="effect-button"
                            id="theme-settings"
                            class="flat-btn settings-switch-btn-cont"
                            effect="theme-switch">
                        <data-display id="theme-btn"
                                      class="settings-switch-bnt"
                                      prop="theme">Dark</data-display>
                    </button>
                    <button is="effect-button"
                            id="msystem-settings"
                            class="flat-btn settings-switch-btn-cont"
                            effect="measurement-switch">
                        <data-display id="measurement-btn"
                                      class="settings-switch-bnt"
                                      prop="measurement">Metric</data-display>
                    </button>
                </div> <!-- end settings btn row -->

                <!-- controlable settings -->
                <div class="settings-card">
                    <div class="settings-card-cont">
                        <connection-switch id="switch-controllable" class="switch-connection switch" name="ble:controllable">
                            <div class="switch--indicator off"></div>
                            <div class="switch--label">Controllable</div>
                        </connection-switch>
                        <div class="device-info">
                            <div class="protocol-switch">
                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                    <path d="M0 0h24v24H0V0z" fill="none"/>
                                    <path d="M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z"/>
                                </svg>
                            </div>
                            <div class="info-cell">
                                <h3 class="">Name</h3>
                                <effect-display id="controllable-name"
                                                class="info-cell-value"
                                                effect="ble:controllable:name"">--</effect-display>
                            </div>
                            <div class="info-cell">
                                <source-switch class="source-switch"
                                               effect="sources"
                                               path="power"
                                               value="ble:controllable">
                                    <h3 class="">Power</h3>
                                    <data-display id="controllable-power"
                                                  class="info-cell-value"
                                                  prop="power">--</data-display>
                                </source-switch>
                            </div>
                            <div class="info-cell">
                                <source-switch class="source-switch"
                                               effect="sources"
                                               path="cadence"
                                               value="ble:controllable">
                                    <h3 class="">Cadence</h3>
                                    <data-display id="controllable-cadence"
                                                class="info-cell-value"
                                                prop="cadence">--</data-display>
                                </source-switch>
                            </div>
                            <div class="info-cell">
                                <source-switch class="source-switch"
                                               effect="sources"
                                               path="speed"
                                               value="ble:controllable">
                                    <h3 class="">Speed</h3>
                                    <speed-display id="controllable-speed"
                                                   class="info-cell-value"
                                                   prop="speed">
                                        <value>--</value>
                                        <unit class="data-tile-small--unit"></unit>
                                    </speed-display>
                                </source-switch>
                            </div>
                        </div>
                    </div>
                </div> <!-- end controlable settings -->

                <!-- power-meter settings -->
                <div class="settings-card row-border">
                    <div class="settings-card-cont">
                        <connection-switch id="switch-power-meter" class="switch-connection switch" name="ble:power-meter">
                            <div class="switch--indicator off"></div>
                            <div class="switch--label">Power Meter</div>
                        </connection-switch>
                        <div class="device-info">
                            <div class="protocol-switch">
                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                    <path d="M0 0h24v24H0V0z" fill="none"/>
                                    <path d="M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z"/>
                                </svg>
                            </div>
                            <div class="info-cell">
                                <h3 class="">Name</h3>
                                <effect-display id="controllable-name"
                                                class="info-cell-value"
                                                effect="ble:power-meter:name"">--</effect-display>
                            </div>
                            <div class="info-cell">
                                <source-switch class="source-switch"
                                               effect="sources"
                                               path="power"
                                               value="ble:power-meter">
                                    <h3 class="">Power</h3>
                                    <data-display id="power-meter-power"
                                                  class="info-cell-value"
                                                  prop="power">--</data-display>
                                </source-switch>
                            </div>
                            <div class="info-cell">
                                <source-switch class="source-switch"
                                               effect="sources"
                                               path="cadence"
                                               value="ble:power-meter">
                                    <h3 class="">Cadence</h3>
                                    <data-display id="power-meter-cadence"
                                                  class="info-cell-value"
                                                  prop="cadence">--</data-display>
                                </source-switch>
                            </div>
                            <div class="info-cell">
                                <source-switch class="source-switch"
                                               effect="sources"
                                               path="speed"
                                               value="ble:power-meter">
                                    <h3 class="">Speed</h3>
                                    <speed-display id="power-meter-speed"
                                                   class="info-cell-value"
                                                   prop="speed">
                                        <value>--</value>
                                        <unit class="data-tile-small--unit"></unit>
                                    </speed-display>
                                </source-switch>
                            </div>
                        </div>
                    </div>
                </div> <!-- end power-meter settings -->

                <!-- hrm settings -->
                <div class="settings-card row-border">
                    <div class="settings-card-cont">
                        <connection-switch id="switch-hrm" class="switch-connection switch" name="ble:hrm">
                            <div class="switch--indicator off"></div>
                            <div class="switch--label">HRM</div>
                        </connection-switch>
                        <div class="device-info">
                            <div class="protocol-switch">
                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                    <path d="M0 0h24v24H0V0z" fill="none"/>
                                    <path d="M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z"/>
                                </svg>
                            </div>
                            <div class="info-cell">
                                <h3 class="">Name</h3>
                                <effect-display id="controllable-name"
                                                class="info-cell-value"
                                                effect="ble:hrm:name"">--</effect-display>
                            </div>
                            <div class="info-cell">
                                <source-switch class="source-switch"
                                               effect="sources"
                                               path="heartRate"
                                               value="ble:hrm">
                                    <h3 class="">Heart Rate</h3>
                                    <data-display id="hrm-heartRate"
                                                  class="info-cell-value"
                                                  prop="heartRate">--</data-display>
                                </source-switch>
                            </div>
                        </div>
                    </div>
                </div> <!--end ant hrm settings -->

                <div class="settings-card row-border">
                    <div class="settings-card-cont">
                        <connection-switch id="switch-ant" class="switch-connection switch" name="ant">
                            <div class="switch--indicator off"></div>
                            <div class="switch--label">ANT+</div>
                        </connection-switch>

                        <!-- device-chooser -->
                        <request-popup  id="device-chooser">
                            <div id="request-popup-list" class="device-chooser-list"></div>
                            <div id="request-popup-bootom-bar" class="device-chooser-bootom-bar">
                                <div id="request-popup-status" class="status">Searching ...</div>
                                <div class="chooser-btns">
                                    <button is="effect-button"
                                            id="request-popup-cancel-btn"
                                            class="request-btn"
                                            effect="ant:request:cancel">Cancel</button>
                                    <button is="effect-button"
                                            id="request-popup-pair-btn"
                                            class="request-btn"
                                            effect="ant:request:pair">Pair</button>
                                </div>
                            </div>
                        </request-popup><!-- end device-chooser -->

                    </div>
                </div>

                <!-- ant controlable settings -->
                <div class="settings-card row-border">
                    <div class="settings-card-cont">
                        <connection-switch id="switch-controllable" class="switch-connection switch" name="ant:controllable">
                            <div class="switch--indicator off"></div>
                            <div class="switch--label">Controllable</div>
                        </connection-switch>
                        <div class="device-info">
                            <div class="protocol-switch">
                                <svg class="icon" xmlns="http://www.w3.org/2000/svg"
                                     height="24"
                                     viewBox="0 0 24 24"
                                     width="24">
                                    <path d="M22 9V7h-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14zM6 13h5v4H6zm6-6h4v3h-4zM6 7h5v5H6zm6 4h4v6h-4z"/>
                                    <path d="M0 0h24v24H0zm0 0h24v24H0z" fill="none"/>
                                </svg>
                            </div>
                            <div class="info-cell">
                                <h3 class="">Name</h3>
                                <effect-display id="controllable-name"
                                                class="info-cell-value"
                                                effect="ant:controllable:name"">--</effect-display>
                            </div>
                            <div class="info-cell">
                                <source-switch class="source-switch"
                                               effect="sources"
                                               path="power"
                                               value="ant:controllable">
                                    <h3 class="">Power</h3>
                                    <data-display id="controllable-power"
                                                  class="info-cell-value"
                                                  prop="power">--</data-display>
                                </source-switch>
                            </div>
                            <div class="info-cell">
                                <source-switch class="source-switch"
                                               effect="sources"
                                               path="cadence"
                                               value="ant:controllable">
                                    <h3 class="">Cadence</h3>
                                    <data-display id="controllable-cadence"
                                                class="info-cell-value"
                                                prop="cadence">--</data-display>
                                </source-switch>
                            </div>
                            <div class="info-cell">
                                <source-switch class="source-switch"
                                               effect="sources"
                                               path="speed"
                                               value="ant:controllable">
                                    <h3 class="">Speed</h3>
                                    <speed-display id="controllable-speed"
                                                   class="info-cell-value"
                                                   prop="speed">
                                        <value>--</value>
                                        <unit class="data-tile-small--unit"></unit>
                                    </speed-display>
                                </source-switch>
                            </div>
                        </div>
                    </div>
                </div> <!-- end ant controlable settings -->

                <!-- ant hrm settings -->
                <div class="settings-card row-border">
                    <div class="settings-card-cont">
                        <connection-switch id="switch-ant-hrm" class="switch-connection switch" name="ant:hrm">
                            <div class="switch--indicator off"></div>
                            <div class="switch--label">HRM</div>
                        </connection-switch>
                        <div class="device-info">
                            <div class="protocol-switch">
                                <svg class="icon" xmlns="http://www.w3.org/2000/svg"
                                     height="24"
                                     viewBox="0 0 24 24"
                                     width="24">
                                    <path d="M22 9V7h-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14zM6 13h5v4H6zm6-6h4v3h-4zM6 7h5v5H6zm6 4h4v6h-4z"/>
                                    <path d="M0 0h24v24H0zm0 0h24v24H0z" fill="none"/>
                                </svg>
                            </div>
                            <div class="info-cell">
                                <h3 class="">Name</h3>
                                <effect-display id="controllable-name"
                                                class="info-cell-value"
                                                effect="ant:hrm:name">--</effect-display>
                            </div>
                            <div class="info-cell">
                                <source-switch class="source-switch"
                                               effect="sources"
                                               path="heartRate"
                                               value="ant:hrm">
                                    <h3 class="">Heart Rate</h3>
                                    <data-display id="hrm-heartRate"
                                                  class="info-cell-value"
                                                  prop="heartRate">--</data-display>
                                </source-switch>
                            </div>
                            <div class="info-cell">
                                <h3 class="">Battery</h3>
                                <battery-display id="hrm-battery"
                                                class="info-cell-value"
                                                effect="ant:hrm:battery">--</battery-display>
                            </div>
                            <div class="info-cell">
                                <h3 class="">Manufacturer</h3>
                                <device-info-display id="hrm-info"
                                                    class="info-cell-value"
                                                    effect="ant:hrm:info">--</device-info-display>
                            </div>
                        </div>
                    </div>
                </div> <!--end ant hrm settings -->

                <!-- <div class="settings-card row-border">
                     <div id="outdoor-settings" class="settings-card-cont">
                     <connection-switch id="switch-gps" class="switch-connection switch" name="gps">
                     <div class="switch--indicator off"></div>
                     <div class="switch--label">GPS</div>
                     </connection-switch>
                     </div>
                     </div> -->
                <div class="connections">
                    <h2 class="h2">Connections</h2>
                    <div class="connection">
                        <img class="connection-icon" alt="GC" src="images/connections/garmin-connect.jpg"/>
                        <div class="connection-content">
                            <h3 class="h3">Garmin</h3>
                            <a class="a t2" href="https://connect.garmin.com/modern/import-data" target="_blank">Garmin Connect Import Page</a>
                        </div>
                    </div>
                </div> <!-- end connections -->
                <div id="about">
                    <div class="row">
                        <p class="t4">Version: 0.0.9</p>
                    </div>
                    <div class="row">
                        <p class="t4">Code is on <a class="a" href="https://github.com/dvmarinoff/Flux">github</a> | License <a class="a" href="https://www.gnu.org/licenses/agpl-3.0.en.html"> AGPL-3.0</a></p>
                    </div>
                </div>
            </div> <!-- end settings page -->

            </page-group>

            <div class="fixed-bottom">
                <div class="controls">
                    <watch-control id="watch" class="watch cf">
                        <div id="workout-name">
                            <data-display prop="workout" path="name">Free ride</data-display>
                        </div>

                        <div id="workout-start" class="control--btn">
                            <svg class="control--btn--icon" xmlns="http://www.w3.org/2000/svg"
                                height="24" viewBox="0 0 24 24" width="24">
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48
                                        10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                            </svg>
                        </div>

                        <div id="workout-pause" class="control--btn">
                            <svg class="control--btn--icon" xmlns="http://www.w3.org/2000/svg"
                                 enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px">
                                <g>
                                    <rect fill="none" height="24" width="24"/>
                                    <path d="M22,12c0,5.52-4.48,10-10,10S2,17.52,2,12c0-1.19,0.22-2.32,0.6-3.38L4.48,9.3C4.17,10.14,4,11.05,4,12c0,4.41,3.59,8,8,8 s8-3.59,8-8s-3.59-8-8-8c-0.95,0-1.85,0.17-2.69,0.48L8.63,2.59C9.69,2.22,10.82,2,12,2C17.52,2,22,6.48,22,12z M5.5,4 C4.67,4,4,4.67,4,5.5S4.67,7,5.5,7S7,6.33,7,5.5S6.33,4,5.5,4z M11,16V8H9v8H11z M15,16V8h-2v8H15z"/>
                                </g>
                            </svg>
                        </div>

                        <div id="watch-start" class="control--btn">
                            <svg class="control--btn--icon" xmlns="http://www.w3.org/2000/svg"
                                    height="24" viewBox="0 0 24 24" width="24">
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <path d="M8 5v14l11-7L8 5z"/>
                            </svg>
                        </div>

                        <div id="watch-pause" class="control--btn">
                            <svg class="control--btn--icon" xmlns="http://www.w3.org/2000/svg"
                                    height="24" viewBox="0 0 24 24" width="24">
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                            </svg>
                        </div>

                        <div id="watch-lap" class="control--btn">
                            <svg class="control--btn--icon" xmlns="http://www.w3.org/2000/svg"
                                    height="24" viewBox="0 0 24 24" width="24">
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <path d="M15 1H9v2h6V1zm-4
                                            13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42
                                            1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03
                                            9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7
                                            7-7 7 3.13 7 7-3.13 7-7 7z"/>
                        </div>

                        <div id="watch-stop" class="control--btn">
                            <svg class="control--btn--icon" xmlns="http://www.w3.org/2000/svg"
                                    height="24" viewBox="0 0 24 24" width="24">
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <path d="M6 6h12v12H6V6z"/>
                            </svg>
                        </div>

                        <div id="activity-save" class="control--btn">
                            <svg class="control--btn--icon" xmlns="http://www.w3.org/2000/svg"
                                    height="24" viewBox="0 0 24 24" width="24">
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <path d="M19 12v7H5v-7H3v9h18v-9h-2zm-6 .67l2.59-2.58L17
                                            11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2v9.67z"/>
                            </svg>
                        </div>
                    </watch-control>
                </div> <!-- end controls -->

                <div id="menu" class="menu">
                    <div class="page-btn-group menu--row">
                        <page-btn id="settings-tab-btn"
                                  class="menu--btn"
                                  prop="page"
                                  effect="page-set"
                                  param="settings">
                            <svg class="menu--btn--icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <path class="menu--btn--icon--fill" d="M19.44 12.99l-.01.02c.04-.33.08-.67.08-1.01
                                            0-.34-.03-.66-.07-.99l.01.02 2.44-1.92-2.43-4.22-2.87
                                            1.16.01.01c-.52-.4-1.09-.74-1.71-1h.01L14.44 2H9.57l-.44
                                            3.07h.01c-.62.26-1.19.6-1.71 1l.01-.01-2.88-1.17-2.44 4.22 2.44
                                            1.92.01-.02c-.04.33-.07.65-.07.99 0 .34.03.68.08 1.01l-.01-.02-2.1
                                            1.65-.33.26 2.43 4.2 2.88-1.15-.02-.04c.53.41 1.1.75 1.73 1.01h-.03L9.58
                                            22h4.85s.03-.18.06-.42l.38-2.65h-.01c.62-.26 1.2-.6 1.73-1.01l-.02.04
                                            2.88 1.15 2.43-4.2s-.14-.12-.33-.26l-2.11-1.66zM12 15.5c-1.93
                                            0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>
                            </svg>
                            <div class="menu--btn--label">Settings</div>
                        </page-btn>
                        <page-btn id="home-tab-btn"
                                  class="menu--btn active"
                                  prop="page"
                                  effect="page-set"
                                  param="home">
                            <svg class="menu--btn--icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path class="menu--btn--icon--fill" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z" />
                            </svg>
                            <div class="menu--btn--label">Home</div>
                        </page-btn>
                        <page-btn id="workouts-tab-btn"
                                  class="menu--btn"
                                  prop="page"
                                  effect="page-set"
                                  param="workouts">
                            <svg class="menu--btn--icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <path class="menu--btn--icon--fill" fill="#aaa" d="M4 10h12v2H4zm0-4h12v2H4zm0 8h8v2H4zm10 0v6l5-3z"/>
                            </svg>
                            <div class="menu--btn--label">Workouts</div>
                        </page-btn>
                    </div> <!-- end page-btn-group -->
                </div> <!-- end menu -->

            </div> <!-- end fixed-bottom -->
        </div> <!-- end wrapper -->
`;

export { page };
