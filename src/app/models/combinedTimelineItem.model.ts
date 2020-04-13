export class CombinedTimelineItem {
    name: string;
    series: TimelineSerieItem[];
}

export class TimelineSerieItem {
    constructor(public name: string, public value: number) { }
}