

interface Character{
    name: string;
    hp: number;
    skills: string[];
    hometown: string;
}

const strider : Character = {
    name: 'Geronimo',
    hp: 100,
    skills: ['Healing', 'Bash'],
    hometown: "Cipolletti"
}

console.table(strider);
export{}