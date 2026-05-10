export interface Country{
    name: string;
    capital: string;
    region: 'Americas' | 'Europe' | 'Asia' | 'Oceania' | 'Africa';
    population: number;
    flag: string;
}