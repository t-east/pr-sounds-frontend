import { EventTag } from "./tag";

export interface Event {
  title: string;
  tags: EventTag[];
  url: string;
  from_date: Date;
  to_date: Date;
  is_all_day: boolean;
  description_text: string;
}

export interface CreatedEvent {
  title: string;
  description_text: string;
  to_date: Date;
  from_date: Date;
  is_all_day: boolean;
  event_id: number;
  user_id: number;
}

export interface Events {
  events: CreatedEvent[];
  total: number;
}
  