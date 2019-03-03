import * as React from 'react';
import { Util } from "../../../../common/util/util";
import { Summary } from "./summary";
import { StationSummary } from '../../../../common/models/stations/stationSummary';
import { Search, SearchState } from '../search';
import { SearchOptions } from '../../../../common/models/search';

declare var google: any;

export interface StationsProps {
    stations?: StationSummary[]
    search: SearchOptions;
    onSelect: (station: StationSummary) => void;
};
export interface StationsState {
    visibleStations: StationSummary[]
}

export class Stations extends React.Component<StationsProps, StationsState> {
    constructor(props: StationsProps) {
        super(props);
        this.state = {
            visibleStations: this.props.stations,
        };

        this.onSearch = this.onSearch.bind(this);
    }

    componentDidUpdate(prevProps: any) {
        this.setState({visibleStations: this.props.stations});
    }

    onSearch(search: SearchState) {
        this.setState({
            visibleStations: this.props.stations.filter(s => {
                var format = this.props.search.formats.find(f => f.id === s.props.station.formatId);
                var visibleByFormat = search.selectedFormat === format.code;
                
                return visibleByFormat;
            })
        });
    }

    render() {
        if (this.props.stations == null) {
            return (
                <div>Loading stations...</div>
            );
        }

        const stations = this.props.stations.map(s =>
            <Summary station={s} onSelect={this.props.onSelect} />
        );
        return (
            <div>
                <div>There are {this.props.stations.length} stations, and {this.state.visibleStations.length} match your search.</div>

                <Search options={this.props.search} onSearch={this.onSearch} />

                <div className="row">
                    {stations}
                </div>
            </div>
        );
    }
}