import { Card, CardContent, CardHeader } from '../ui/card';
import { Service } from './data';

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Card className="w-80 bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col h-full justify-between">
      <CardHeader>
        <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
      </CardHeader>
      <CardContent className="p-6 text-center">
        <p className="text-gray-600">{service.description}</p>
      </CardContent>
    </Card>
  );
}
