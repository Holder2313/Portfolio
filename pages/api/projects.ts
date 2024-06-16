import { NextApiRequest, NextApiResponse } from 'next';
import { addProject } from '../../utils/actions';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const data = req.body;

    try {
      const project = await addProject(data);
      res.status(200).json(project);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to add project' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
