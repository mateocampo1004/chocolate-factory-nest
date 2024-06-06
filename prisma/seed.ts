import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

async function main() {

 
  // Seed Employees
  const employee1Id = uuidv4();
  const employee2Id = uuidv4();
  await prisma.employee.createMany({
    data: [
      {
        id: employee1Id,
        firstName: 'Alice',
        lastName: 'Johnson',
        role: 'Manager',
        department: 'Sales',
        hireDate: new Date('2020-01-01T00:00:00Z'),
        salary: 50000,
      },
      {
        id: employee2Id,
        firstName: 'Bob',
        lastName: 'Brown',
        role: 'Developer',
        department: 'IT',
        hireDate: new Date('2019-06-15T00:00:00Z'),
        salary: 70000,
      },
    ],
  });

 
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
