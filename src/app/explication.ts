import { Person } from "./person";
import { StudyArea } from "./study-area";

export interface Explication {
    id: number;
    designation: string;
    description: string;
    studyArea: StudyArea;
    isRemote: boolean;
    teacher: Person;
    active: boolean;
}
