export interface EventTag {
    tag_id: number;
    event_id: number;
    label: string;
    color: string;
}

export interface EventTagCreate {
    event_id: number;
    label: string;
    color: string;
}

export interface Tags {
  tags: EventTag[];
  total: number;
}
  